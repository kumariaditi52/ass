
$(document).ready(function() {
let itemCount = 0;
let totalPrice = 0;
const cartItems = {};

function updateCart() {
$('#item-count').text(itemCount);
$('#total-price').text(totalPrice);
$('#cart-items').empty();
for (let item in cartItems) {
    $('#cart-items').append(`
        <li>
            ${item} - ₹${cartItems[item].price} x ${cartItems[item].quantity}
            <button class="remove-from-cart" data-name="${item}">Remove</button>
        </li>
    `);
}
}

$('.add-to-cart').click(function() {
const itemName = $(this).data('name');
const itemPrice = parseInt($(this).data('price'));

if (cartItems[itemName]) {
    cartItems[itemName].quantity++;
} else {
    cartItems[itemName] = { price: itemPrice, quantity: 1 };
}

itemCount++;
totalPrice += itemPrice;
updateCart();
});

$(document).on('click', '.remove-from-cart', function() {
const itemName = $(this).data('name');
const item = cartItems[itemName];

itemCount -= item.quantity;
totalPrice -= item.price * item.quantity;

delete cartItems[itemName];
updateCart();
});

$('#view-all').click(function() {
$('#view-all-modal').show();
});

$('.close').click(function() {
$('#view-all-modal').hide();
});

$('.carousel').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
dots: true,
arrows: true
});
});

