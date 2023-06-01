from django.db import models

# Create your models here.
class hats(models.Model):
    fabric = models.CharField(max_length=50)
    style_name = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    picture_url = models.URLField(null=True)

    bin = models.ForeignKey(
        "BinVO",
        related_name="hats",
        on_delete=models.CASCADE,
        null=True
    )

    def __str__(self):
        return self.name
