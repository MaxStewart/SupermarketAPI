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
    var numberOfItems = 0;
    var itemRow = document.getElementById("itemRow");
    itemRow.innerHTML = "";

    data.items.forEach(item => {

        if (parseInt(category) == item.category.id || category == null) {
            numberOfItems++;

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
            cardTitleLink.href = "item.html?" + item.id;
            cardTitleLink.textContent = item.name;
            cardTitle.appendChild(cardTitleLink);

            var cardPrice = document.createElement("h5");
            cardPrice.textContent = "$" + item.price;

            var cardDescription = document.createElement("p");
            cardDescription.classList += "card-text";
            cardDescription.textContent = item.description;
            cardDescription.style.paddingBottom = "10px";

            var addToCartButton = document.createElement("button");
            addToCartButton.type = "button";
            addToCartButton.classList += "btn btn-primary";
            addToCartButton.textContent = "Add To Cart";
            addToCartButton.style.position = "absolute";
            addToCartButton.style.bottom = "0";
            addToCartButton.style.right = "0";
            addToCartButton.style.margin = "5px";

            addToCartButton.addEventListener("click", function () {
                var itemToAdd = {
                    name: item.name,
                    description: item.description,
                    price: item.price
                };

                addItemToCart(itemToAdd);

            });


            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardPrice);
            cardBody.appendChild(cardDescription);
            cardBody.appendChild(addToCartButton);

            //cardDiv.appendChild(imageLink);
            cardDiv.appendChild(cardBody);

            outerDiv.appendChild(cardDiv);

            itemRow.appendChild(outerDiv);
        }
    });

    if (numberOfItems == 0) {
        var noItemTextLine = document.createElement("p");
        noItemTextLine.textContent = "Sorry there are currently no items under this category";
        noItemTextLine.classList += "mx-auto ";
        noItemTextLine.classList += "font-weight-bolder";
        itemRow.appendChild(noItemTextLine);
    }
}

function addItemToCart(item) {

    //If we have a cart already
    if (sessionStorage.getItem("cartContents")) {      
        // Get cart contents
        let cartContents = JSON.parse(sessionStorage.getItem("cartContents"));

        // Add all current items to new array
        let cartArray = new Array();
        for (let i = 0; i < cartContents.length; i++) {
            cartArray.push(cartContents[i]);
        }
        // Add a new item to array
        cartArray.push(item);

        // Clear and update session storage
        sessionStorage.clear();
        cartArray = JSON.stringify(cartArray);
        sessionStorage.setItem("cartContents", cartArray);
    }
    // There is no cart
    else {
        // Make a new cart and add the item
        let cartContents = JSON.stringify(new Array(item));
        sessionStorage.setItem("cartContents", cartContents);
    }

    console.log(sessionStorage.getItem("cartContents"));
}