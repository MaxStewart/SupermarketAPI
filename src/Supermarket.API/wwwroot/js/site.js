const ProductsURI = 'api/products';
const CategoriesURI = 'api/categories';

function postItems()
{

}

function getCategories()
{
    fetch(CategoriesURI)
        .then(response => response.json())
        .then(data => createCategoriesList(data))
        .catch(error => console.error('Unable to get categories. ', error));
}

function getItems()
{
    fetch(ProductsURI)
        .then(response => response.json())
        .then(data => createItemList(data))
        .catch(error => console.error('Unable to get items.', error));
}

function createCategoriesList(data)
{
    var list = document.getElementById("categoryList");

    data.forEach(item => {
        var listItem = document.createElement("a");
        listItem.textContent = item.name;
        listItem.classList += "list-group-item";
        listItem.href = "#";

        list.appendChild(listItem);

    });
}

function createItemList(data)
{
    var itemRow = document.getElementById("itemRow");

    data.items.forEach(item => {

        // Outer div
        var outerDiv = document.createElement("div");
        outerDiv.classList += "col-lg-4 col-md-6 mb-4";

        // Card div
        var cardDiv = document.createElement("div");
        cardDiv.classList += "card h-100";

        // Image with link
        var imageLink = document.createElement("a");
        var image = document.createElement("img");
        image.classList += "card-img-top";
        image.src = "http://placehold.it/700x400";
        imageLink.appendChild(image);

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
        cardPrice.textContent = "$55";

        var cardDescription = document.createElement("p");
        cardDescription.classList += "card-text";
        cardDescription.textContent = "Description";

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardDescription);

        cardDiv.appendChild(imageLink);
        cardDiv.appendChild(cardBody);

        outerDiv.appendChild(cardDiv);

        itemRow.appendChild(outerDiv);

    /*
     * <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">Item One</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
        </div>
     */
    }); 
}