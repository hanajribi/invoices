function addProduct() {
    var name = document.getElementById('productNameId').value;
    var price = document.getElementById('productPriceId').value;
    var idProduct = JSON.parse(localStorage.getItem('idProductKey') || '1');

    var x = {};
    x.id = idProduct
    x.name = name;
    x.price = price;

    var productsTab = JSON.parse(localStorage.getItem('productsTab')) || [];
    productsTab.push(x);
    localStorage.setItem('productsTab', JSON.stringify(productsTab));
    localStorage.setItem('idProductKey', idProduct + 1);
    location.reload();
}
function selectOption() {
    var products = JSON.parse(localStorage.getItem('productsTab')) || [];
    var catalogueSelect = ``;

    for (let i = 0; i < products.length; i++) {
        catalogueSelect = catalogueSelect + `
    <option value="${products[i].id}">${products[i].name}</option>`;

    }
    document.getElementById('productId').innerHTML = catalogueSelect;

}
function myOrders() {
    qty = document.getElementById('qtyId').value;
    product = document.getElementById('productId').value;
    localStorage.setItem('productId', product);
    localStorage.setItem('qty', qty);

    var idOrders = JSON.parse(localStorage.getItem('idOrdersKey') || '1');
    var x = {};
    x.id = idOrders
    x.qty = qty;
    x.product = product;
    var ordersTab = JSON.parse(localStorage.getItem('ordersTab')) || [];
    ordersTab.push(x);
    localStorage.setItem('ordersTab', JSON.stringify(ordersTab));
    localStorage.setItem('idOrdersKey', idOrders + 1);

}
function displayOrders() {

    var today = new Date();
    var dateTime = today.toLocaleString();
    document.getElementById('dateNow').innerHTML = dateTime;
    var productId = localStorage.getItem('productId');
    var qty = localStorage.getItem('qty');
    var product = searchById(productId, 'productsTab')
    var tableForum = `
    <table class="table table-striped">
    <thead>
        <tr>
            
            <th>product</th>
            <th class="right">Price</th>
            <th class="center">Qty</th>
            <th class="right">Total</th>
        </tr>
    </thead>
   
        <tbody>
        <tr>
         
            <td class="left">${product.name}</td>
            <td class="right">${product.price}</td>
            <td class="center">${qty}</td>
            <td class="right">${product.price * qty} </td>
        </tr>
       
    </tbody> </table>`;
    document.getElementById('factId').innerHTML = tableForum

}
function searchById(id, key) {
    var Tab = JSON.parse(localStorage.getItem(key) || "[]");
    var obj;
    for (let i = 0; i < Tab.length; i++) {
        if (Tab[i].id == id) {
            obj = Tab[i];
            break;
        }
    }
    return obj;
}





