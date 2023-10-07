var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var myForm = document.getElementById('my-form');
var localStorageDataList = document.getElementById("localStorageData");

myForm.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    // Get user input values
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    const userData = { name, email, phone};

    localStorage.setItem(email, JSON.stringify(userData));

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value="";

    displayLocalStorageData();
}

function displayLocalStorageData() {
    localStorageDataList.innerHTML = ""; // Clear previous data

    for (let i = 0; i < localStorage.length; i++) {
        const email = localStorage.key(i);
        const userData = JSON.parse(localStorage.getItem(email));

        const listItem = document.createElement("li");
        const deleteItem = document.createElement("button");
        deleteItem.textContent = "Delete";
        deleteItem.addEventListener('click', () => deleteElement(email));

        listItem.textContent = `Name: ${userData.name}, Email: ${userData.email}, Mobile: ${userData.phone}`;

        localStorageDataList.appendChild(listItem);
        listItem.appendChild(deleteItem);
    }
}

function deleteElement(email){
    localStorage.removeItem(email);
    displayLocalStorageData();
}