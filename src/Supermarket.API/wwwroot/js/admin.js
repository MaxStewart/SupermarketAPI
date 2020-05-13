const ProductsURI = 'api/products';
const CategoriesURI = 'api/categories';

document.getElementById("POSTForm").addEventListener('submit', addItem)

function addItem(event) {
    event.preventDefault();

    const addNameTextbox = document.getElementById('name');
    const addPriceTextbox = document.getElementById('price');
    const addCategory = document.getElementById('inputCategory');
    const addDescriptionTextbox = document.getElementById('description');
    console.log(addCategory.value);
    const item = {
        name: addNameTextbox.value.trim(),
        price: parseFloat(addPriceTextbox.value.trim()),
        description: addDescriptionTextbox.value,
        QuantityInPackage: 1, // Not really used atm so hardcoded
        UnitOfMeasurement: 1, // Not really used atm so hardcoded
        CategoryId: parseInt(addCategory.value)
    };

    console.log(JSON.stringify(item));

    fetch(ProductsURI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            alert("Your product has been added successfully") // TODO: Bug this will show even with an error
            //getItems();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function getItems() {
    fetch(CategoriesURI)
        .then(response => response.json())
        .then(data => createCategoriesList(data))
        .catch(error => console.error('Unable to get items.', error));
}

function createCategoriesList(data) {
    var list = document.getElementById("inputCategory");

    data.forEach(item => {
        var option = document.createElement("option");
        option.textContent = item.name;
        option.value = item.id;

        list.appendChild(option);

    });
}