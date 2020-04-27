const uri = 'api/categories';

let categories = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function myFunction(data)
{
    console.log(data);
}

function _displayItems(data) {
    const body = document.createElement("p");
    body.textContent = data;
    console.log("Data ", data);

    /*data.forEach(item => {
        body.innerHTML += item.name;
    });
    */
}