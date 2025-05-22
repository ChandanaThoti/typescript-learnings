var input = require('prompt-sync')();
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
var totalAmount = 0;
var discount = 0;
var discountedAmount = totalAmount;
askUser();
function askUser() {
    var productName = input('Enter the product name: ');
    var quantity = input('Enter the quantity: ');
    var cupSize = "";
    var eachItem = {};
    var itemFound = false;
    for (var i = 0; i < products.length; i++) {
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
            break;
        }
    }
    if (itemFound) {
        orderedItems.push(eachItem);
    }
    else {
        console.log("❌ Product not Found....");
    }
    console.log("Ordered items are:");
    console.log(orderedItems);
}
var enter = require('prompt-sync')();
Billing();
function Billing() {
    while (true) {
        var selection = enter('Do you want to add more items? (yes/done): ');
        if (selection.toLowerCase() === "yes") {
            askUser();
        }
        else if (selection.toLowerCase() === "done") {
            console.log("・・・・・・・・・・・・・・・・・・・・");
            console.log("Hurray🤩!! Your order has been placed....");
            console.log("Your ordered Items are ➡️➡️");
            for (var _i = 0, orderedItems_1 = orderedItems; _i < orderedItems_1.length; _i++) {
                var item = orderedItems_1[_i];
                totalAmount += item.UnitPrice;
                console.log("Product Name:-", item.ProductName);
                console.log("Quantity:-", item.Quantity);
                console.log("UnitPrice:-", item.UnitPrice);
                console.log("--------------------------");
            }
            if (totalAmount > 1000) {
                discount = (totalAmount * 0.1);
                discountedAmount = totalAmount - discount;
            }
            console.log("Here is your bill 💵💵");
            console.log("* * * * * * * * * * * * * * * * ");
            console.log("Total price", totalAmount);
            console.log("Discount", discount);
            console.log("Discounted price", discountedAmount);
            break;
        }
        else {
            console.log("Invalid selection");
        }
    }
}
while (true) {
    var paid = input("Did you pay the bill?(paid/no):");
    if (paid.toLowerCase() === "paid") {
        orderedItems = [];
        askUser();
        Billing();
    }
    else {
        console.log("Please Pay the bill");
        break;
    }
}
