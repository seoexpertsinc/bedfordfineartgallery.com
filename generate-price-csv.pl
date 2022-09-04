use Mojo::Base -strict, -signatures;
use Cpanel::JSON::XS;
use JSON::Slurper -slurp_auto;
use Mojo::File qw(path);
use Text::CSV_XS 'csv';
use Mojo::Util 'dumper';

exit main(@ARGV);

sub main() {
    my $paintings = path('cms/paintings')->list->map(sub {
        say "Slurping $_";
        my $painting = slurp_json $_;
        my $artist = $painting->{artist} ? slurp_json "cms/artists/$painting->{artist}" : {};
        my $artist_name = $artist->{name} // '';
        if ($artist->{tinyDescription}) {
            $artist_name .= " ($artist->{tinyDescription})";
        }

        return {
            artist => $artist_name,
            title  => $painting->{title},
            price  => '',
            slug   => $painting->{slug},
        };
    })->sort(sub {
        my $a_last_name = (split /\s+/, $a->{artist})[-1] // '';
        my $b_last_name = (split /\s+/, $b->{artist})[-1] // '';

        return lc($a_last_name) cmp lc($b_last_name);
    });

    csv(out => 'painting-prices.csv', in => $paintings->to_array, headers => [qw(artist title price slug)], encoding => 'UTF-8', sep_char => "\t");

    0;
}
