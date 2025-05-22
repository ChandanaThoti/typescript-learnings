var ProductType;
(function (ProductType) {
    ProductType[ProductType["Vegan"] = 0] = "Vegan";
    ProductType[ProductType["Vegetarian"] = 1] = "Vegetarian";
    ProductType[ProductType["NonVegetarian"] = 2] = "NonVegetarian";
})(ProductType || (ProductType = {}));
var Category;
(function (Category) {
    Category[Category["Beverages"] = 0] = "Beverages";
    Category[Category["Sweets"] = 1] = "Sweets";
    Category[Category["Desserts"] = 2] = "Desserts";
    Category[Category["Snacks"] = 3] = "Snacks";
    Category[Category["Bakery"] = 4] = "Bakery";
})(Category || (Category = {}));
var products = [
    { ProductName: "Chocolates", Price: 100, ProductType: ProductType.Vegan, Category: Category.Sweets },
    { ProductName: "Ice Cream", Price: 200, ProductType: ProductType.Vegetarian, Category: Category.Desserts },
    { ProductName: "Chips", Price: 50, ProductType: ProductType.NonVegetarian, Category: Category.Snacks },
    { ProductName: "Cake", Price: 500, ProductType: ProductType.Vegetarian, Category: Category.Bakery },
    { ProductName: "Juice", Price: 150, ProductType: ProductType.Vegan, Category: Category.Beverages }
];
console.log(products);
var orderedItems = [];
askUser();
function askUser() {
    var input = require('prompt-sync')();
    var productName = input('Enter the product name: ');
    var quantity = input('Enter the quantity: ');
    var eachItem = {};
    var itemFound = true;
    for (var i = 0; i < products.length; i++) {
        var cupSize = "";
        if (products[i].ProductName.toLowerCase() === productName.toLowerCase()) {
            itemFound = true;
            if (products[i].Category === Category.Beverages) {
                cupSize = input('Enter the cup size (small, medium, large): ');
            }
            eachItem = {
                ProductName: productName,
                Quantity: quantity,
                CupSize: cupSize,
                UnitPrice: products[i].Price * quantity,
            };
        }
        else {
            itemFound = false;
        }
    }
    if (itemFound) {
        orderedItems.push(eachItem);
    }
    else {
        console.log("Product not Found...");
    }
}
var enter = require('prompt-sync')();
var selection = enter('Do you want to add more items? (yes/no): ');
if (selection.toLowerCase() === "yes") {
    askUser();
}
else if (selection.toLowerCase() === "done") {
    console.log("Thank you for your order!");
    console.log("Ordered items are:");
    console.log(orderedItems);
}
else {
    console.log("Invalid selection");
}
