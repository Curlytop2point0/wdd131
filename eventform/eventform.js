const form = document.querySelector("#ticket-form");
const typeSelect = document.querySelector("#type");
const codeBox = document.querySelector("#code-box");
const codeLabel = document.querySelector("#code-label");
const codeInput = document.querySelector("#code");
const errorsDiv = document.querySelector("#errors");
const ticketDiv = document.querySelector("#ticket");
const checkedFields = form.querySelectorAll("input, select");

function showCodeBox() {
    if (typeSelect.value === "student") {
        codeLabel.textContent = "Student I#";
        codeInput.required = true;
        codeInput.pattern = "[0-9]{9}";
        codeInput.maxLength = 9;
        codeBox.classList.remove("hide");
    } else if (typeSelect.value === "guest") {
        codeLabel.textContent = "Access Code";
        codeInput.required = true;
        codeInput.removeAttribute("pattern");
        codeInput.maxLength = 8;
        codeBox.classList.remove("hide");
    } else {
        codeInput.required = false;
        codeBox.classList.add("hide");
    }
}

function isFutureDate(dateString) {
    if (!dateString) {
        return false;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(dateString + "T00:00:00");
    return chosen > today;
}

function validateForm() {
    const errors = [];
    if (form.firstName.value.trim().length < 2) {
        errors.push("Please enter your first name.");
    }
    if (form.lastName.value.trim().length < 2) {
        errors.push("Please enter your last name.");
    }
    if (!form.email.checkValidity()) {
        errors.push("Please enter a valid email address.");
    }
    if (typeSelect.value === "") {
        errors.push("Please choose a type.");
    } else if (typeSelect.value === "student" && !/^[0-9]{9}$/.test(codeInput.value.trim())) {
        errors.push("Student I# must be 9 digits.");
    } else if (typeSelect.value === "guest" && codeInput.value.trim() !== "EVENT131") {
        errors.push("Access Code is not correct.");
    }
    if (!isFutureDate(form.eventDate.value)) {
        errors.push("Please choose an event date later than today.");
    }
    return errors;
}

function getFieldMessage(field) {
    if (field.name === "code" && typeSelect.value === "student" && !/^[0-9]{9}$/.test(field.value.trim())) {
        return "Student I# must be 9 digits.";
    }
    if (field.name === "code" && typeSelect.value === "guest" && field.value.trim() !== "EVENT131") {
        return "Access Code is not correct.";
    }
    if (field.name === "eventDate" && field.value && !isFutureDate(field.value)) {
        return "Please choose an event date later than today.";
    }
    if (field.name === "code" && typeSelect.value === "") {
        return "";
    }
    return field.validationMessage;
}

function checkField(field) {
    const message = getFieldMessage(field);
    field.classList.toggle("invalid", message !== "");
    document.querySelector(`#${field.id}-error`).textContent = message;
}

function handleFieldEvent(event) {
    checkField(event.target);
}

function clearField(field) {
    field.classList.remove("invalid");
    document.querySelector(`#${field.id}-error`).textContent = "";
}

function changeType() {
    codeInput.value = "";
    clearField(codeInput);
    showCodeBox();
}

function submitForm(event) {
    event.preventDefault();
    errorsDiv.innerHTML = "";
    ticketDiv.innerHTML = "";
    checkedFields.forEach(checkField);
    const errors = validateForm();
    if (errors.length > 0) {
        errorsDiv.innerHTML = errors.map((error) => `<p>${error}</p>`).join("");
        return;
    }
    const type = typeSelect.value === "student" ? "Student" : "Guest";
    ticketDiv.innerHTML = `<h2>Your Ticket</h2>
        <p>Name: ${form.firstName.value} ${form.lastName.value}</p>
        <p>Email: ${form.email.value}</p>
        <p>Type: ${type}</p>
        <p>Event Date: ${form.eventDate.value}</p>`;
    form.reset();
    showCodeBox();
    checkedFields.forEach(clearField);
}

typeSelect.addEventListener("change", changeType);
checkedFields.forEach((field) => {
    field.addEventListener("input", handleFieldEvent);
    field.addEventListener("blur", handleFieldEvent);
});
form.addEventListener("submit", submitForm);
/*
  AI Disclosure: The code in this file was written by Maxim Person.
  1. Code review guidance from AI, Grok Bot, October 31, 2026.
*/
