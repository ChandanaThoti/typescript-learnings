class DataHolder<T> {
    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }

    setData(newData: T): void {
        this.data = newData;
    }
}

function processInput<T>(input: string, dataType: new (value: any) => T): DataHolder<T> {
    let parsedInput: T;
    try {
        parsedInput = new dataType(input);
    } catch (error) {
        throw new Error(`Invalid input: ${input} is not a valid ${dataType.name}`);
    }
    return new DataHolder<T>(parsedInput);
}

const stringInput = prompt("Enter a string:");
if (stringInput !== null) {
    const stringData = processInput(stringInput, String);
    console.log("String data:", stringData.getData());
}

const numberInput = prompt("Enter a number:");
if (numberInput !== null) {
    try {
        const numberData = processInput(numberInput, Number);
        console.log("Number data:", numberData.getData());
    } catch (error: any) {
        console.error(error.message);
    }
}

const booleanInput = prompt("Enter true or false:");
if (booleanInput !== null) {
    try {
        const booleanData = processInput(booleanInput, Boolean);
        console.log("Boolean data:", booleanData.getData());
    } catch (error: any) {
        console.error(error.message);
    }
}