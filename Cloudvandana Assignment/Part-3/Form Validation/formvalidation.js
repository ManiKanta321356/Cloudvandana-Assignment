
const form = document.getElementById("survey-form");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const resultPopup = document.getElementById("result-popup");
const closePopup = document.getElementById("close-popup");
const popupResult = document.getElementById("popup-result");

submitButton.addEventListener("click", function() {
    // Validation logic
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    // Check if all fields are filled
    if (firstName && lastName && dateOfBirth && country && gender.length > 0 && profession && email && mobileNumber) {
        // Display the results in the popup 
        const resultText = `
            First Name: ${firstName}<br>
            Last Name: ${lastName}<br>
            Date of Birth: ${dateOfBirth}<br>
            Country: ${country}<br>
            Gender: ${gender.join(", ")}<br>
            Profession: ${profession}<br>
            Email: ${email}<br>
            Mobile Number: ${mobileNumber}
        `;
        popupResult.innerHTML = resultText;
        resultPopup.style.display = "flex";
    } else {
        alert("Please fill in all the required fields.");
    }
});

resetButton.addEventListener("click", function() {
    form.reset();
});

closePopup.addEventListener("click", function() {
    resultPopup.style.display = "none";
    form.reset();
});
