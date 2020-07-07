function getCartItems(sessionStorageKey) {

    if (sessionStorage.getItem(sessionStorageKey)) {

        let cartTable = document.getElementById("cartTable");
        let totalPrice = 0;

        // Get cart contents
        let cartContents = JSON.parse(sessionStorage.getItem(sessionStorageKey));

        let tbody = document.createElement("tbody");

        for (let i = 0; i < cartContents.length; i++) {
            console.log(cartContents[i]);
            totalPrice += cartContents[i].price;
            promoDiscount = 0;

            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let td2 = document.createElement("td");

            p1.style = "margin-bottom: 0px;";
            p1.textContent = cartContents[i].name;

            p2.classList = "font-weight-light";
            //p2.style += "font-size: 62.5%;";
            p2.textContent = cartContents[i].description;

            td2.classList = "text-right";
            td2.textContent = "$" + cartContents[i].price;

            td1.appendChild(p1);
            td1.appendChild(p2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        }

        // Promotion row
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        tr.classList = "table-success";

        td1.textContent = "Promo code";

        td2.classList = "text-right";
        td2.textContent = "-$" + promoDiscount;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);

        // Total row
        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");

        td1.classList = "font-weight-bold";
        td1.textContent = "Total";

        td2.classList = "text-right font-weight-bolder";
        td2.textContent = "$" + (Math.round((totalPrice + Number.EPSILON) * 100) / 100);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);

        // Add all rows to table
        cartTable.appendChild(tbody);
    }

}