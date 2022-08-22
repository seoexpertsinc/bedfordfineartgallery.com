use Mojo::Base -strict, -signatures;
use Cpanel::JSON::XS;
use JSON::Slurper -std_auto, -encoder => Cpanel::JSON::XS->new->utf8
        ->pretty
        ->canonical
        ->allow_nonref
        ->allow_blessed
        ->convert_blessed;
use Mojo::UserAgent;
use Mojo::Util 'dumper';

exit main(@ARGV);

sub main($url) {
    my $ua     = Mojo::UserAgent->new;
    my $result = $ua->get($url)->result;

    $result->dom->find('ul.productGrid2 li')->grep(sub { $_->at('span.gallery_new_label') } )->map(sub { $_->at('a')->attr('href') })->each(sub ($href, $) {
        $href =~ s/.html/-html/;
        my $path = "cms/paintings/$href";
        my $painting = slurp_json $path;


        $painting->{status} = 'New';

        spurt_json $painting, $path;
    });

    0;
}
