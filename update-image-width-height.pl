use Mojo::Base -strict, -signatures;
use Cpanel::JSON::XS;
use Image::Size 'imgsize';
use JSON::Slurper -std_auto, -encoder => Cpanel::JSON::XS->new->utf8
        ->pretty
        ->canonical
        ->allow_nonref
        ->allow_blessed
        ->convert_blessed;
use Mojo::File qw(curfile path);
use Mojo::UserAgent;
use Mojo::Util qw(dumper slugify);

exit main(@ARGV);

sub main() {
    path('cms/paintings')->list->each(sub ($file, $) {
        say "Slurping $file";
        my $painting = slurp_json $file;
        my $image = path(curfile->dirname->child('static'), $painting->{mediumResImage});

        my $error;
        ($painting->{mediumResImageWidth}, $painting->{mediumResImageHeight}, $error) = imgsize($image->to_string);
        die $error if $error && $error ne 'JPG';

        if ($painting->{gridImage}) {
            my $error;
            my $image = path(curfile->dirname->child('static'), $painting->{gridImage});
            ($painting->{gridImageWidth}, $painting->{gridImageHeight}, $error) = imgsize($image->to_string);
            die $error if $error && $error ne 'JPG';
        }

        if ($painting->{highResImage}) {
            my $error;
            my $image = path(curfile->dirname->child('static'), $painting->{highResImage});
            ($painting->{highResImageWidth}, $painting->{highResImageHeight}, $error) = imgsize($image->to_string);
            die $error if $error && $error ne 'JPG';
        }

        say "Spurting $file";
        spurt_json $painting, $file;
    });

    0;
}
