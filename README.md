# Wardrobify

Team:

* Tom Chong - Hats
* Mac Stephens - Shoes

## Design

## Shoes microservice

The Shoes microservice is where the data for shoe collections. It will have a model called Shoe, which will store data about shoe manufacturer, model name, and color. And there will be a picture associated with each pair of shoes. The microservice then interfaces with the Wardrobe app, storing this information in different bins. This is done with the BinVO, which is a foreign key on the shoe model. Each bin has a closet name, bin number, and bin size. There will be a form that can create a shoe model instance with all of the shoe information, and the bin number. The user can also delete shoes from their collection.

## Hats microservice

Explain your models and integration with the wardrobe
microservice, here.
