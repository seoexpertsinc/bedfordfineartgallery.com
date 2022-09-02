use Mojo::Base -strict, -signatures;
use Cpanel::JSON::XS;
use JSON::Slurper -std_auto, -encoder => Cpanel::JSON::XS->new->utf8
        ->pretty
        ->canonical
        ->allow_nonref
        ->allow_blessed
        ->convert_blessed;
use Mojo::File qw(path);
use Mojo::UserAgent;

exit main(@ARGV);

sub main() {
    my $ua = Mojo::UserAgent->new;

    path('cms/paintings')->list->each(sub ($file, $) {
        say "Slurping $file";
        my $painting = slurp_json $file;
        return if $painting->{status} eq 'Sold';
        return if grep { $_ eq 'Sculpture'} $painting->{categories}->@*;

        my $url = 'https://www.bedfordfineartgallery.com/' . $painting->{slug} =~ s/-html/.html/r;
        my $result = $ua->get($url)->result;

        ($painting->{paintingWidth}, $painting->{paintingHeight}) = split /\s+x\s+/, $result->dom->at('artplacer')->attr('size');

        say "Spurting $file ($painting->{paintingWidth} x $painting->{paintingHeight})";
        spurt_json $painting, $file;
    });

    0;
}
