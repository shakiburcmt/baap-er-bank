document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositAmount = depositField.value;

    const depositTotalElement = document.getElementById('updateByButton');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})