var input = require('prompt-sync')();
enum ProductType {
    Vegan,
    Vegetarian,
    NonVegetarian,
}
enum Category{
    Beverages,
    Sweets,
    Desserts,
    Snacks,
    Bakery
}
interface Product{
    ProductName: string;
    Price: number;
    ProductType: ProductType;
    Category: Category;
}
let products:Product[] =[
    {ProductName: "Chocolates",Price: 100,ProductType: ProductType.Vegan,Category: Category.Sweets},
    {ProductName: "Ice Cream",Price: 200,ProductType: ProductType.Vegetarian,Category: Category.Desserts},
    {ProductName: "Chips",Price: 50,ProductType: ProductType.NonVegetarian,Category: Category.Snacks},
    {ProductName: "Cake",Price: 500,ProductType: ProductType.Vegetarian,Category: Category.Bakery},
    {ProductName: "Juice",Price: 150,ProductType: ProductType.Vegan,Category: Category.Beverages}
]


console.log(products)
let orderedItems:any[]=[];
let totalAmount:number=0;
let discount:number=0;
let discountedAmount:number=totalAmount;
askUser()
function askUser(){
    type Items={
        ProductName:string;
        Quantity:number;
        CupSize?:string;
        UnitPrice:number;
    }
    let productName: string= input('Enter the product name: ');
    let quantity : number= input('Enter the quantity: ');
    let cupSize:string="";
    let eachItem:any={}
    var itemFound:boolean=false;
    for(let i=0;i<products.length;i++){
        
        if(products[i].ProductName.toLowerCase()===productName.toLowerCase()){
            itemFound=true;
            if (products[i].Category===Category.Beverages){
                cupSize = input('Enter the cup size (small, medium, large): ');
        }
        eachItem  ={
        ProductName:productName,
        Quantity:quantity,
        CupSize:cupSize,
        UnitPrice:products[i].Price*quantity,
        }
        break;
        }
        
    }
    if(itemFound){orderedItems.push(eachItem);}
    else{console.log("❌ Product not Found....")}
    
    console.log("Ordered items are:")
    console.log(orderedItems);
}
    let enter=require('prompt-sync')();
Billing()
function Billing(){
    while(true){
    const selection = enter('Do you want to add more items? (yes/done): ');

    if (selection.toLowerCase() === "yes") {
        askUser();  }
    else if (selection.toLowerCase() === "done") {
        console.log("・・・・・・・・・・・・・・・・・・・・")
        console.log("Hurray🤩!! Your order has been placed....");
        console.log("Your ordered Items are ➡️➡️");


        for (let item of orderedItems) {
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
        console.log("...........................");
        console.log("Total price", totalAmount);
        console.log("Discount", discount);
        console.log("Discounted price", discountedAmount);
        console.log("...........................");
        break; 
    } 
    else {
        console.log("Invalid selection");
    }
}
}

while(true){
let paid=input("Did you pay the bill?(paid/no):")
if(paid.toLowerCase()==="paid"){
    orderedItems=[]
    console.log("* * * * * * * * * * * * * * * * ");
    askUser()
    Billing()
}
else{
    console.log("Please Pay the bill")
    break
}
}
