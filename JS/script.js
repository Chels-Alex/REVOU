
// Show welcome popup when the page loads
showWelcomePopUp();

// Function to show a welcome pop-up and set the user's name
function showWelcomePopUp() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById("Welcome-user").innerHTML = userName;
    }

}

function validateForm() {
    const nameInput= document.getElementById("name-input");

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById("message-output").innerHTML = `Thank you, ${nameInput.value}, for your message!`;
        nameInput.value = ''; // Clear the input field after submission
    }

    const dateInput= document.getElementById("date-input");

    if (dateInput.value === '') {
        alert('Please enter your date of birth.');
    } else {
        dateInput.value = ''; // Clear the input field after submission
    }

}