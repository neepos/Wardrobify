from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Shoe, BinVO
from common.json import ModelEncoder
import json


# bin vo encoder handles the properties from the BinVO model
class BinVOEncoder(ModelEncoder):
    model = BinVO
    properties = ["import_href", "closet_name", "bin_number", "bin_size"]


# make detail encoder for json
class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "bin",
    ]
    encoders = {"bin": BinVOEncoder()}


class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "id",
        "bin",
    ]

    def get_extra_data(self, o):
        return {"bin": o.bin.bin_number}


# create a view that GETs a list of shoes


@require_http_methods(["GET", "POST"])
def api_list_shoes(request, bin_vo_id=None):
    if request.method == "GET":
        if bin_vo_id is not None:
            shoe = Shoe.objects.filter(bin=bin_vo_id)
        else:
            shoe = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoe},
            encoder=ShoeListEncoder,
        )
    # implement the POST portion of the function
    else:
        content = json.loads(request.body)
        import_href = f"/api/bins/{content['bin']}/"
        bin = BinVO.objects.get(import_href=import_href)
        content["bin"] = bin
        shoes = Shoe.objects.create(**content)
        return JsonResponse(
            shoes,
            encoder=ShoeDetailEncoder,
            safe=False,
        )


# create a shoe detail function that GETs details

@require_http_methods(["GET", "DELETE", "PUT"])
def api_shoe_detail(request, id):
    if request.method == "GET":
        try:
            shoe = Shoe.objects.get(id=id)
            return JsonResponse(
                    shoe,
                    encoder=ShoeDetailEncoder,
                    safe=False,
                )
        except Shoe.DoesNotExist:
            return JsonResponse(
                {"message": "no id exists"},
                status=400,
            )

    elif request.method == "DELETE":
        count, _ = Shoe.objects.filter(id=id).delete()
        return JsonResponse({"Shoe Deleted": count > 0})
    else:
        content = json.loads(request.body)
        Shoe.objects.filter(id=id).update(**content)
        shoe = Shoe.objects.get(id=id)
        return JsonResponse(
            shoe,
            encoder=ShoeDetailEncoder,
            safe=False,
        )
