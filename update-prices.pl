use Mojo::Base -strict, -signatures;
use Cpanel::JSON::XS;
use JSON::Slurper -std_auto, -encoder => Cpanel::JSON::XS->new->utf8
        ->pretty
        ->canonical
        ->allow_nonref
        ->allow_blessed
        ->convert_blessed;
use List::Util 'first';
use Mojo::Collection 'c';
use Mojo::File qw(path);
use Text::CSV_XS 'csv';

exit main(@ARGV);

sub main($price_csv) {
    my $paintings = c(csv(in => $price_csv, sep_char => "\t", headers => 'auto', encoding => 'UTF-8', quote_char => q{!})->@*);

    $paintings->each(sub ($painting, $index) {
        my $file = "cms/paintings/$painting->{Slug}";

        my $price = $painting->{Price};
        unless ($price) {
            say "Skipping (no price) $file";
            return;
        }
        unless ($price =~ /^\$((\d+)((,\d+|\d+)*)(\s*|\.(\d{2}))$)/) {
            die qq{Invalid price '$price' on line $index: $file};
        }

        say "Slurping $file";
        my $painting_from_json = slurp_json $file;

        my $highlights = $painting_from_json->{highlights} ||= [];
        my $competitively_priced_index = first { $highlights->[$_]{highlight} =~ /Competitively Priced/i } 0..$highlights->@* - 1;
        my $new_competitively_priced = { highlight => "Competitively Priced $price" };
        if ($competitively_priced_index) {
            if ($highlights->[$competitively_priced_index]{highlight} ne 'Competitively Priced') {
                say qq{Existing competitively priced: '$highlights->[$competitively_priced_index]{highlight}' on line $index: $file};
                say qq{Accept new one? '$new_competitively_priced->{highlight} (y/n)'};
                chomp(my $answer = <STDIN>);

                if ($answer eq 'n') {
                    return;
                }
            }

            $painting_from_json->{highlights}[$competitively_priced_index] = $new_competitively_priced;
        } else {
            push $painting_from_json->{highlights}->@*, $new_competitively_priced;
        }

        say "Spurting $file";
        spurt_json $painting_from_json, $file;
    });

    0;
}
