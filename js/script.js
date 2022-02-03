// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById('mynumber').value;
    // Check if Number is Valid
    if (isNaN(num) || num.toString().length == 0 || num<1000 || num>9999 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter the year between 1000 and 9999 as a whole number.`;
    } else {
        // Get Number Information
        txt += `You have entered the Year ${num}. </p>`;
        // Check if the Number is a Leap Year
        if (isLeapYear(num)) {
            txt += `${num} is a Leap Year.`;
        } else {
            txt += `${num} is not a Leap Year.`;
        }
    }

    // Display Information in the Browser Window
    document.getElementById('numinfo').innerHTML = txt;
}

// Function to Determine if the Number (Year) is a Leap Year
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0) ? true : false;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById('numinfo').innerHTML = txt;
}