const ProductsURI = 'api/products';
const CategoriesURI = 'api/categories';

document.getElementById("POSTForm").addEventListener('submit', addItem)

function addItem(event) {
    event.preventDefault();

    const addNameTextbox = document.getElementById('name');
    const addPriceTextbox = document.getElementById('price');
    const addCategory = document.getElementById('inputCategory');
    const addDescriptionTextbox = document.getElementById('description');
    /*
    Id = 100,
        Name = "Apple",
        Price = 1.99,
        Description = "Remember your 5+ a day",
        QuantityInPackage = 1,
        UnitOfMeasurement = EUnitOfMeasurement.Unity,
        CategoryId = 100*/
    const item = {
        name: addNameTextbox.value.trim(),
        price: parseFloat(addPriceTextbox.value.trim()),
        description: addDescriptionTextbox.value,
        QuantityInPackage: 1, // Not really used atm so hardcoded
        UnitOfMeasurement: 1, // Not really used atm so hardcoded
        CategoryId: 100 // Currently Hardcoded until we get the categories and use the selection box
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