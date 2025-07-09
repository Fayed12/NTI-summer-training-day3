let inputField = document.getElementById("Answer");

function EnterNumber(value) {
    // add the number and next
    inputField.value += value;
}

function EnterOperator(operator) {
    let lastChar = inputField.value.slice(-1);
    // take last char and compare with last char if operator replace it
    if ("+-*/".includes(lastChar)) {
        // replace current operator by the next
        inputField.value = inputField.value.slice(0, -1) + operator;
    } else {
        inputField.value += operator;
        }
}

function EnterEqual() {
    try {
        // It is a built-in function in JavaScript, which uses a string to run JavaScript code.
    inputField.value = eval(inputField.value);
    } catch {
    inputField.value = "Error";
    }
}

function EnterClear() {
    inputField.value = "";
}

// ============================================Event Object============================================================

// 1.	Alert ASCII Code of any key pressed and detect whether it is alt key or ctrl key or shift key.

document.addEventListener("keydown", (e) => {
    if (e.altKey) {
        alert(`${e.key} ==> alt key`);
    } else if (e.ctrlKey) {
        alert(`${e.key} ==> ctrl key`);
    } else if (e.shiftKey) {
        alert(`${e.key} ==> shift key`);
    } else {
        alert(`${e.key} ==> ${e.which}`);
    }
})

// ========================================================================================================================

// 2-2.	Make your own input type number that accepts numbers only. “using event object”

const input = document.getElementById("numberOnly");

input.addEventListener("keydown", function (e) {

    const char = e.key;

    if (!/[0-9]/.test(char) && char !== "Backspace" && char !== "ArrowLeft" && char !== "ArrowRight" && char !== "Delete" && char !== "Tab") {

        e.preventDefault();
        alert("wrong! please enter number");
    }
});