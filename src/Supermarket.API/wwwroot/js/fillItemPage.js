var queryString = location.search.substring(1);
const ProductsURI = 'api/products';

function getItems() {
    fetch(ProductsURI)
        .then(response => response.json())
        .then(data => createItemList(data))
        .catch(error => console.error('Unable to get items.', error));
}

function createItemList(data) {

    data.items.forEach(item => {

        if (parseInt(queryString) == item.id) {

            document.title = item.name;

            //document.createElement("")
        }
    });
}
