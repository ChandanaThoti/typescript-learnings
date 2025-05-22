var DataHolder = /** @class */ (function () {
    function DataHolder(data) {
        this.data = data;
    }
    DataHolder.prototype.getData = function () {
        return this.data;
    };
    DataHolder.prototype.setData = function (newData) {
        this.data = newData;
    };
    return DataHolder;
}());
function processInput(input, dataType) {
    var parsedInput;
    try {
        parsedInput = new dataType(input);
    }
    catch (error) {
        throw new Error("Invalid input: ".concat(input, " is not a valid ").concat(dataType.name));
    }
    return new DataHolder(parsedInput);
}
var stringInput = prompt("Enter a string:");
if (stringInput !== null) {
    var stringData = processInput(stringInput, String);
    console.log("String data:", stringData.getData());
}
var numberInput = prompt("Enter a number:");
if (numberInput !== null) {
    try {
        var numberData = processInput(numberInput, Number);
        console.log("Number data:", numberData.getData());
    }
    catch (error) {
        console.error(error.message);
    }
}
var booleanInput = prompt("Enter true or false:");
if (booleanInput !== null) {
    try {
        var booleanData = processInput(booleanInput, Boolean);
        console.log("Boolean data:", booleanData.getData());
    }
    catch (error) {
        console.error(error.message);
    }
}
