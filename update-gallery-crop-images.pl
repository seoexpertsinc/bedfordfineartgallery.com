use Mojo::Base -strict, -signatures;
use Cpanel::JSON::XS;
use JSON::Slurper -std_auto, -encoder => Cpanel::JSON::XS->new->utf8
        ->pretty
        ->canonical
        ->allow_nonref
        ->allow_blessed
        ->convert_blessed;
use Mojo::File 'path';
use Mojo::UserAgent;
use Mojo::Util qw(dumper slugify);
use Syntax::Keyword::Try;

use constant SLEEP_TIME_IN_SECONDS => 1;

exit main(@ARGV);

sub main($url) {
    my $result = get_ua()->get($url)->result;

    $result->dom->find('ul.productGrid2 li')->each(sub ($li, $) {
        my $href = $li->at('a')->attr('href');
        $href =~ s/.html/-html/;
        return if $href eq 'arthur_fitzwilliam_tait_grouse-html';


        my $img_src = $li->at('img')->attr('data-src') || $li->at('img')->attr('src');

        if (!$img_src) {
            die "WTF: " . $li;
        }

        my $new_image_src = $img_src =~ s/.jpg/_gallery_crop.jpg/r;
        $new_image_src =~ s/.png/_gallery_crop.png/;

        my $path = "cms/paintings/$href";
        say "on $href";
        my $painting = slurp_json $path;

        $painting->{galleryCropImage} = download_image($img_src, $new_image_src);

        say "Saving $href";
        try {
            spurt_json $painting, $path;
        } catch ($e) {
            warn "fail: $e";
        }
    });

    0;
}

sub download_image ($image_url, $new_image_src) {
    my ($image_name) = $new_image_src =~ m{.*/(.*)$};

    my $image_path = path($image_name);
    my $ext = $image_path->extname;
    my $basename = $image_path->basename($ext);

    $basename =~ s/\W+$//g;
    $image_name = slugify($basename) . ".$ext";
    my $image_file = path('static/cms-uploads')->child($image_name);

    $image_name = "/cms-uploads/$image_name";

    return $image_name if -e $image_file;

    get_url($image_url)->save_to($image_file);

    return $image_name;
}

sub get_url ($url) {
    if ($url !~ /^http/) {
        $url =~ s/^\///;
        $url = "https://www.bedfordfineartgallery.com/$url";
    }
    say "GETTING $url";
    my $result = get_ua()->get($url)->result;
    sleep SLEEP_TIME_IN_SECONDS;

    return $result;
}

sub get_ua () {
    state $ua = Mojo::UserAgent->new;
    $ua->on(start => sub ($ua, $tx) {
        $tx->req->headers->user_agent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 OPR/68.0.3618.206');
    });

    return $ua;
}
