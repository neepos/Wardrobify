from django.db import models


# make the bin VO
class BinVO(models.Model):
    closet_name = models.CharField(max_length=100, null=True)
    bin_number = models.PositiveSmallIntegerField(null=True)
    bin_size = models.PositiveSmallIntegerField(null=True)
    import_href = models.URLField(max_length=200, null=True, unique=True)


class Shoe(models.Model):
    manufacturer = models.CharField(max_length=50)
    model_name = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    picture_url = models.URLField(null=True, blank=True)

    # add the bin that the shoe is stored in
    # remember that the bin is the VO, so figure that out
    bin = models.ForeignKey(
        "BinVO",
        related_name="shoes",
        on_delete=models.CASCADE,
        null=True
    )

    def __str__(self):
        return self.name
