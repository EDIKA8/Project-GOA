document.getElementById('depositButton').addEventListener('click', deposit);
document.getElementById('withdrawButton').addEventListener('click', withdraw);

function deposit() {
    let amount = document.getElementById('amount').value;

    if (amount === "") {
        alert("გთხოვთ ჩაწეროთ თანხის რაოდენობა");
        return;
    }

    let currentBalance = (document.getElementById('balance').innerText);
    let newBalance = currentBalance + (amount);

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('amount').value = "";
}

function withdraw() {
    let amount = document.getElementById('amount').value;

    if (amount === "") {
        alert("გთხოვთ ჩაწეროთ თანხის რაოდენობა");
        return;
    }

    let currentBalance = (document.getElementById('balance').innerText);
    let newBalance = currentBalance - (amount);

    if (newBalance < 0) {
        alert("არასაკმარისი თანხა");
        return;
    }

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('amount').value = "";
}