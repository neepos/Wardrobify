from django.db import models


class Shoe(models.Model):
    manufacturer = models.CharField(max_length=200)
    model_name = models.CharField(max_length=150)
    color = models.Charfield(max_length=150)
    picture_url = models.URLField(null=True)
    
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

# make the bin VO
# the 
