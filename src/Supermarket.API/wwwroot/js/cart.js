function getCartItems(sessionStorageKey) {

    if (sessionStorage.getItem(sessionStorageKey)) {
        // Get cart contents
        let cartContents = JSON.parse(sessionStorage.getItem(sessionStorageKey));

        let tbody = document.createElement("tbody");

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");

        let td2 = document.createElement("td");


        for (let i = 0; i < cartContents.length; i++) {
            console.log(cartContents[i]);
        }
    }

}

/*
<tbody>
    <tr>
        <td><p style="margin-bottom:0px;">Item</p><p style="margin-bottom:0px;" class="font-weight-light">Description</p></td>
        <td class="text-right">$25</td>
    </tr>
    <tr class="table-success">
        <td>Promo Code</td>
        <td class="text-right">-$20</td>
    </tr>
    <tr>
        <td class="font-weight-bold">Total</td>
        <td class="text-right font-weight-bolder">$20</td>
    </tr>
</tbody>
*/