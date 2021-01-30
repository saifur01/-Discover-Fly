//Total Price Count
function grandTotal() {
    let getFirstClassPrice = firstClassTicket.value * 150;
    let getEconomyPrice = economyTicket.value * 100;
    let subTotal = (document.querySelector('.subtotal').textContent = getFirstClassPrice + getEconomyPrice);
    let userSubTotal = (document.querySelector('.user-subtotal').textContent = subTotal);
    let vat = (document.querySelector('.vat').textContent = Math.round(subTotal * 0.1));
    let userVat = (document.querySelector('.user-vat').textContent = vat);
    let total = (document.querySelector('.total').textContent = subTotal + vat);
    let userTotal = (document.querySelector('.user-total').textContent = total);
    
}

function grandTotal (){
    let getFirstClassPrice = firstClassTicket.value * 150;
    let getEconomyPrice = economyTicket.value *100;
    let subTotal = (document.querySelector('subTotal').textContent = getFirstClassPrice + getEconomyPrice);
    let userSubTotal = (document.querySelector('.user-subtotal').textContent = subTotal)
    let vat = (document.querySelector('.vat').textContent = Math.round(subTotal * 0.1));
    let userVat =(document.querySelector('.user.vat').textContent = vat);
    let total = (document.querySelector('.total').textContent = subTotal  + vat);
    let userTotal = (document.querySelector('.user-total').textContent = total);

    

}