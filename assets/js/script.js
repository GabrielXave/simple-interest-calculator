function simpleInterest() {
    // Get input values
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);

    // Get references to error and result elements
    const errorElement = document.getElementById("error");
    const resultElement = document.getElementById("result");

    // Reset messages
    errorElement.style.display = "none";
    resultElement.style.display = "none";

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        errorElement.textContent = "Oops! Invalid input. Please enter numbers greater than 0.";
        errorElement.style.color = "red";
        errorElement.style.display = "block";
        return; // Stop execution if inputs are invalid
    }

    // Calculate simple interest
    let interest = (principal * rate * time) / 100;

    // Display result
    resultElement.textContent = `After ${time} years, your investment will be worth $${interest.toFixed(2)} with simple interest.`;
    resultElement.style.color = "green";
    resultElement.style.display = "block";
}
