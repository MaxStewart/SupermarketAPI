const ProductsURI = 'api/products';
const CategoriesURI = 'api/categories';

document.getElementById("POSTForm").addEventListener('submit', addItem)
document.getElementById("categoryForm").addEventListener('submit', addCategory)

async function addItem(event) {
    event.preventDefault();

    const addNameTextbox = document.getElementById('name');
    const addPriceTextbox = document.getElementById('price');
    const addCategory = document.getElementById('inputCategory');
    const addDescriptionTextbox = document.getElementById('description');
    
    const item = {
        name: addNameTextbox.value.trim(),
        price: parseFloat(addPriceTextbox.value.trim()),
        description: addDescriptionTextbox.value,
        QuantityInPackage: 1, // Values not really used atm so hardcoded
        UnitOfMeasurement: 1, // Values not really used atm so hardcoded
        CategoryId: parseInt(addCategory.value)
    };

    let response = await fetch(ProductsURI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });

    if (response.ok) { // if HTTP-status is 200-299
        let json = await response.json();
        alert("Your product has been added successfully");
        addNameTextbox.value = '';
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

async function addCategory(event) {
    event.preventDefault();
    const categoryName = document.getElementById('categoryName');

    const category = {
        name: categoryName.value
    };

    let response = await fetch(CategoriesURI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    });

    if (response.ok) { // if HTTP-status is 200-299
        let json = await response.json();
        categoryName.value = '';
        getItems();
        alert("Your category has been added successfully");
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

async function getItems() {
    let response = await fetch(CategoriesURI);

    if (response.ok) { // if HTTP-status is 200-299
        let json = await response.json();
        createCategoriesList(json);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

function createCategoriesList(data) {
    var list = document.getElementById("inputCategory");
    list.innerHTML = "";
    list.innerHTML += '<option selected>Choose a category</option>';

    data.forEach(item => {
        var option = document.createElement("option");
        option.textContent = item.name;
        option.value = item.id;

        list.appendChild(option);
    });
}