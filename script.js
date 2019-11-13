//Set variables from DOM elements
const invoiceDate = document.getElementById("invoice-date");
const invoiceNumber = document.getElementById("invoice-number");
const rowOne = document.getElementById("row-1");
const rowTwo = document.getElementById("row-2");
const rowThree = document.getElementById("row-3");
const rowFour = document.getElementById("row-4");
const rowFive = document.getElementById("row-5");
const rowSix = document.getElementById("row-6");

//get dates and creates an array

const dates = [];

const hourlyRate = 100;

const today = new Date();

for (let i = 0; i < 5; i++) {
    let rowDate = new Date();
    rowDate.setDate(today.getDate() - i);
    dates.unshift(`${rowDate.getMonth() + 1}/${rowDate.getDate()}/${rowDate.getFullYear()}`)
}

console.log(dates)

//gets invoice date based on last date of array

const invoiceDateText = `Invoice Date: ${dates[4]}`;

const invoiceNumberText = `Invoice #CM${invoiceDateText.replace(/[^0-9]/g, "")}`;

//function to generate a row

function generateRow(row) {
    if (row == 6) {
        //generate total row
        return `
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
        <td>${hourlyRate * 40}</td>
        `
    }
    else {
        //generate day row
        let description = "";
        switch(row) {
            case 1:
                description = "Support Tickets";
                break;
            case 2:
                description = "Meeting, Feature Development, Support Tickets";
                break;
            case 3:
                description = "Feature Development";
                break;
            case 4:
                description = "Support Call, Feature Development";
                break;
            case 5:
                description = "Meeting, Feature Development"
        }
        return `
        <td>${dates[(row - 1)]}</td>
        <td>${description}</td>
        <td>8</td>
        <td>${hourlyRate}</td>
        <td>${hourlyRate * 8}</td>
        `
    }

};

//sets results of generated row to a variable

rowOneHTML = generateRow(1);
rowTwoHTML = generateRow(2);
rowThreeHTML = generateRow(3);
rowFourHTML = generateRow(4);
rowFiveHTML = generateRow(5);
rowSixHTML =generateRow(6);

//Set the inner text of the variables
invoiceDate.innerText = invoiceDateText;
invoiceNumber.innerText = invoiceNumberText;
rowOne.innerHTML = rowOneHTML;
rowTwo.innerHTML = rowTwoHTML;
rowThree.innerHTML = rowThreeHTML;
rowFour.innerHTML = rowFourHTML;
rowFive.innerHTML = rowFiveHTML;
rowSix.innerHTML = rowSixHTML;
