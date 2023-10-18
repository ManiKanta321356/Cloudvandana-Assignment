let result = '';
const resultField = document.getElementById('result');

function appendToResult(value) {
    result += value;
    resultField.value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Error';
    }
}

function clearResult() {
    result = '';
    resultField.value = '';
}
