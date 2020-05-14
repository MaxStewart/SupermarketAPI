const ProductsURI = 'api/products';
const CategoriesURI = 'api/categories';

function getCategories()
{
    fetch(CategoriesURI)
        .then(response => response.json())
        .then(data => createCategoriesList(data))
        .catch(error => console.error('Unable to get categories. ', error));
}

function getItems(category)
{
    fetch(ProductsURI)
        .then(response => response.json())
        .then(data => createItemList(data, category))
        .catch(error => console.error('Unable to get items.', error));
}

function createCategoriesList(data)
{
    var list = document.getElementById("categoryList");

    // Add a selection for all categories
    var listItem = document.createElement("a");
    listItem.textContent = "All";
    listItem.classList += "list-group-item";
    listItem.href = "#";
    listItem.onclick = function () {
        getItems(null)
    };
    list.appendChild(listItem);

    data.forEach(item => {
        var listItem = document.createElement("a");
        listItem.textContent = item.name;
        listItem.classList += "list-group-item";
        listItem.href = "#";
        listItem.onclick = function () {
            getItems(item.id)
        };

        list.appendChild(listItem);

    });
}

function createItemList(data, category)
{
    var itemRow = document.getElementById("itemRow");
    itemRow.innerHTML = "";

    data.items.forEach(item => {

        if (parseInt(category) == item.category.id || category == null) {
            // Outer div
            var outerDiv = document.createElement("div");
            outerDiv.classList += "col-lg-4 col-md-6 mb-4";

            // Card div
            var cardDiv = document.createElement("div");
            cardDiv.classList += "card h-100";

            // Image with link
            /*var imageLink = document.createElement("a");
            var image = document.createElement("img");
            image.classList += "card-img-top";
            image.src = "http://placehold.it/700x400";
            imageLink.appendChild(image);*/

            // Card body div
            var cardBody = document.createElement("div");
            cardBody.classList += "card-body";

            // Card title (h4)
            var cardTitle = document.createElement("h4");
            cardTitle.classList += "card-title";
            var cardTitleLink = document.createElement("a");
            cardTitleLink.href = "#";
            cardTitleLink.textContent = item.name;
            cardTitle.appendChild(cardTitleLink);

            var cardPrice = document.createElement("h5");
            cardPrice.textContent = "$" + item.price;

            var cardDescription = document.createElement("p");
            cardDescription.classList += "card-text";
            cardDescription.textContent = item.description;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardPrice);
            cardBody.appendChild(cardDescription);

            //cardDiv.appendChild(imageLink);
            cardDiv.appendChild(cardBody);

            outerDiv.appendChild(cardDiv);

            itemRow.appendChild(outerDiv);
        }
    }); 
}