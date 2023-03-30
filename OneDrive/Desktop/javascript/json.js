//JSON stands for Java Script Object Notation
// keys to be wrapped in the " " double quotes
// function are not allowed to use in the jason.

//json paths

var laptopsCatogery = {
    "catogery" : "laptops category",
    "laptops" : [
        {
            "company" : "HP",
            "processor" : "core i5",
            "generation" : "seventh generation",
            "ram" : "4gb",
            "hardisk" : "1tb"
         },
         {
            "company" : "Dell",
            "processor" : "core i7",
            "generation" : "eighth generation",
            "ram" : " 8gb",
            "hardisk" : "1tb"
         },
         {
            "company" : "Lenovo",
            "processor" : "core i9",
            "generation" : "ninth generation",
            "ram" : "12gb",
            "hardisk" : "1tb"
         },
         {
            "company" : "Asus",
            "processor" : "core i9",
            "generation" : "tenth generation",
            "ram" : "12gb",
            "hardisk" : "10tb"
         }
    ]
}

laptopsCatogery
laptopsCatogery.catogery
laptopsCatogery.laptops

laptopsCatogery.laptops[0].company
laptopsCatogery.laptops[0].ram
laptopsCatogery.laptops[0].processor
laptopsCatogery.laptops[1].company
laptopsCatogery.laptops[2].company
laptopsCatogery.laptops[3].company

//minified vs pretty jason

//pretty jason
var laptopsCatogery ={
"catogery" : "laptops category",
    "laptops" : [
        {
            "company" : "HP",
            "processor" : "core i5",
            "generation" : "seventh generation",
            "ram" : "4gb",
            "hardisk" : "1tb"
         },
         {
            "company" : "Dell",
            "processor" : "core i7",
            "generation" : "eighth generation",
            "ram" : " 8gb",
            "hardisk" : "1tb"
         },
         {
            "company" : "Lenovo",
            "processor" : "core i9",
            "generation" : "ninth generation",
            "ram" : "12gb",
            "hardisk" : "1tb"
         },
         {
            "company" : "Asus",
            "processor" : "core i9",
            "generation" : "tenth generation",
            "ram" : "12gb",
            "hardisk" : "10tb"
         }
    ]
   }
   //minified json

   var laptopsCatogery = {"catogery":"laptops category","laptops":[{"company":"HP","processor":"core i5","generation":"seventh generation","ram":"4gb","hardisk":"1tb"},{"company":"Dell","processor":"core i7","generation":"eighth generation","ram":" 8gb","hardisk":"1tb"},{"company":"Lenovo","processor":"core i9","generation":"ninth generation","ram":"12gb","hardisk":"1tb"},{"company":"Asus","processor":"core i9","generation":"tenth generation","ram":"12gb","hardisk":"10tb"}]}

























