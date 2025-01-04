// Get input values
function simpleInterest() {
    let principal = parseFloat(document.getElementById("principal").value)
    let rate = parseFloat(document.getElementById("rate").value)
    let time = parseFloat(document.getElementById("time").value)

    //Validating Inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("error").textContent = "Oops! Invalid input. Make sure to enter a number greater than 1.";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.display = "block";
        return;
    }

    //Calculate                                        
    let interest = principal * rate * time / 100;

    //Result
    document.getElementById("result").textContent = `After ${time} years, your investment will be worth $${interest} with simple interest.`;
    document.getElementById("result").style.color = "green";
     document.getElementById("result").style.display = "block";
}