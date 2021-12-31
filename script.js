// Written by Asutosh Variar, 2021
// Function to calculate interest
function compute()
{
    //Console log to test that the function is called
    console.log("Computing...");
    // Reading and storage of principal input
    principal = document.getElementById("principal").value;
    // Console log to report what the function receives to make it easier to debug
    console.log("Principal amount: " + principal);
    // Reading and storage of rate input
    rate = document.getElementById("rate").value;

    console.log("Rate: " + rate);
    // Reading and storage of the number of years input
    years = document.getElementById("numList").value;

    console.log("Number of years: " + years);
    // Finds the current year as declared by the system
    currentYear = new Date().getFullYear();

    console.log("Current year: " + currentYear);
    // Calculates the year to calculate to
    finalYear = parseInt(currentYear) + parseInt(years);
    // Checks to see if the principal input is a positive number, stops function if not
    if(principal <= 0 || isNaN(principal)){
        alert("The principal value is not valid. Please re-enter the value.");
        document.getElementById("principal").focus();
        document.getElementById("principal").click();
        return 1;
    }
    // Calculates interest
    interest = principal * years * (rate / 100);
    // Storage of the result div to fill in
    result = document.getElementById('result');
    // Adding text to the result div
    result.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br></br>";
    // Adds text to resulting div without destroying previous text
    result.innerHTML += "at an interest rate of <mark>" + parseFloat(rate).toFixed(2) + "%</mark>.<br></br>";
    result.innerHTML += "You will receive an amount of <mark>" + parseFloat(interest).toFixed(2) + "</mark>,<br></br>";
    result.innerHTML += "in the year <mark>" + finalYear + "</mark>";

}

// Function to update the rate output value, even after submission
function updateRate(){
    // Storage of location of range output in DOM tree
    ratedisp = document.getElementById("ratedisp");
    // Storage of location of range input in DOM tree
    rate = document.getElementById("rate");
    // Rounds to 2 decimal places at all times
    ratedisp.value = parseFloat(rate.value).toFixed(2) + '%';
}