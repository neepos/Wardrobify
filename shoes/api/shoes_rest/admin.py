from django.contrib import admin
from .models import BinVO, Shoe
# Register your models here.


class BinVOAdmin(admin.ModelAdmin):
    pass


admin.site.register(BinVO, BinVOAdmin)


class ShoeAdmin(admin.ModelAdmin):
    pass


admin.site.register(Shoe, ShoeAdmin)