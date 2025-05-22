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
const orderedItems:any[]=[];
askUser()
function askUser(){
    interface items{
        ProductName:string;
        Quantity:number;
        CupSize?:string;
        UnitPrice:number;
        Discount?:number;
       
    }
    

    const input = require('prompt-sync')();
    const productName: string= input('Enter the product name: ');
    const quantity : number= input('Enter the quantity: ');
    let eachItem:any={};

    for(let i=0;i<products.length;i++){
        let cupSize:string="";
        let itemFound : boolean;
        if(products[i].ProductName.toLowerCase()===productName.toLowerCase()){
            if (products[i].Category===Category.Beverages){
                cupSize = input('Enter the cup size (small, medium, large): ');
                itemFound = true;
        }
        else{
            console.log("Product not found")
        }
        eachItem={
        ProductName:productName,
        Quantity:quantity,
        CupSize:cupSize,
        UnitPrice:products[i].Price*quantity,
        }
        }
    }
    orderedItems.push(eachItem);
    console.log("Ordered items are:")
    console.log(orderedItems);
}
const enter=require('prompt-sync')();
const selection=enter('Do you want to add more items? (yes/no): ');
if(selection.toLowerCase()==="yes"){
    askUser();
}
else if(selection.toLowerCase()==="done"){
    console.log("Thank you for your order!");
    console.log("Ordered items are:")
    console.log(orderedItems);
}
else{
    console.log("Invalid selection");
}
