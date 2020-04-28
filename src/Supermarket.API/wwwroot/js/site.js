const ProductsURI = 'api/products';
const CategoriesURI = 'api/categories';

function postItems()
{

}

function getItems()
{
    fetch(ProductsURI)
        .then(response => response.json())
        .then(data => createItemTable(data))
        .catch(error => console.error('Unable to get items.', error));
}

function createItemTable(data)
{
    var tableBody = document.getElementById("tableBody");

    data.items.forEach(item => {
        var tableHead = document.createElement("tr");
        var tdName = document.createElement("td");
        var tdCategory = document.createElement("td");
        var tdQuantity = document.createElement("td");

        tdName.textContent = item.name;
        tdCategory.textContent = item.category.name;
        tdQuantity.textContent = item.quantityInPackage;

        tableHead.appendChild(tdName);
        tableHead.appendChild(tdQuantity);
        tableHead.appendChild(tdCategory);
        tableBody.appendChild(tableHead);
    }); 
}