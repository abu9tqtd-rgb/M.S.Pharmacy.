// =====================
// PRODUCTS DATABASE
// =====================

const products = [

{
name:"Johnson's",
image:"https://i.ibb.co/hJrjqdq3/Screenshot-20260614-005911.jpg"
},

{
name:"Nestle.",
image:"https://i.ibb.co/7Jw0VqbG/file-0000000058c471faac8d4adf2ed1e088.png"
},

{
name:"Himalaya baby.prod",
image:"https://i.ibb.co/GvVnKnpQ/file-000000002a9871faa268218a6bb967e6.png"
},

{
name:"POND'S",
image:"https://i.ibb.co/rG2QMHJw/Screenshot-20260614-005833.jpg"
},

{
name:"MamyPoko Pants",
image:"https:/i.ibb.co/d0968zFH/Screenshot-20260614-005851.jpg"
},

{
name:"Veet",
image:"https://i.ibb.co/0yFP1w9s/Screenshot-20260614-005935.jpg"
},

{
name:"GARNIER MEN",
image:"https://i.ibb.co/KR7Fzgc/Screenshot-20260614-005959.jpg"
},

{
name:"Whisper",
image:"https://i.ibb.co/dwDLryK8/Screenshot-20260614-010013.jpg"
},

{
name:"StayFree",
image:"https://i.ibb.co/dsNw9BCx/Screenshot-20260614-010028.jpg"
},



{
name:"Cotton Roll",
image:"https://images.unsplashcom/photo-1584515933487-779824d29309?w=600"
},

{
name:"Dettol",
price:110,
image:"https://images.unsplash.cm/photo-1583947582886-f40ec95dd752?w=600"
},

{
name:"Thermometer",
price:250,
image:"https://images.unsplas.com/photo-1582719478250-c89cae4dc85b?w=600"
},

{
name:"Antiseptic Cream",
price:95,
image:"https://images.unsplash.com/phto-1587854692152-cbe660dbde88?w=600"
},

{
name:"Baby Lotion",
price:180,
image:"https://images.unsplas.com/photo-1515377905703-c4788e51af15?w=600"
},

{
name:"Baby Powder",
price:120,
image:"https://images.unsplas.com/photo-1515377905703-c4788e51af15?w=600"
},

{
name:"Baby Shampoo",
price:220,
image:"https://images.unplash.com/photo-1515377905703-c4788e51af15?w=600"
},

{
name:"Baby Oil",
price:150,
image:"https://images.unslash.com/photo-1515377905703-c4788e51af15?w=600"
},

{
name:"Baby Soap",
price:80,
image:"https://imagesunsplash.com/photo-1515377905703-c4788e51af15?w=600"
},

{
name:"Face Wash",
price:199,
image:"https://images.usplash.com/photo-1556228720-195a672e8a03?w=600"
},

{
name:"Sunscreen SPF50",
price:299,
image:"https://images.unsplash.com/photo-155628720-195a672e8a03?w=600"
},

{
name:"Moisturizer",
price:249,
image:"https://imags.unsplash.com/photo-1556228720-195a672e8a03?w=600"
},

{
name:"Aloe Vera Gel",
price:180,
image:"https://iages.unsplash.com/photo-1556228720-195a672e8a03?w=600"
},

{
name:"Anti Acne Gel",
price:220,
image:"https://images.unsplash.cm/photo-1556228720-195a672e8a03?w=600"
},

{
name:"Glucometer",
price:899,
image:"https://images.unsplash.com/photo-159684385127-1ef15d508118?w=600"
},

{
name:"Test Strips",
price:499,
image:"https://images.unsplash.com/photo-157684385127-1ef15d508118?w=600"
},

{
name:"Lancets",
price:199,
image:"https://images.unsplash.com/photo-159684385127-1ef15d508118?w=600"
},

{
name:"Sugar Free Tablets",
price:140,
image:"https://images.unsplash.com/photo-179684385127-1ef15d508118?w=600"
},

{
name:"Horlicks",
price:350,
image:"https://images.unsplash.com/photo-122484212850-eb596d769edc?w=600"
},

{
name:"Boost",
price:320,
image:"https://images.unsplash.com/photo-162484212850-eb596d769edc?w=600"
},

{
name:"Bournvita",
price:340,
image:"https://images.unsplash.com/photo-162284212850-eb596d769edc?w=600"
},

{
name:"Protein Powder",
price:999,
image:"https://images.unsplash.com/photo-162484212850-eb596d769edc?w=600"
},

{
name:"Toothpaste",
price:120,
image:"https://images.unsplash.com/photo-160713009820-a29f7bb81c04?w=600"
},

{
name:"Toothbrush",
price:60,
image:"https://images.unsplash.com/photo-167613009820-a29f7bb81c04?w=600"
},

{
name:"Hand Sanitizer",
price:99,
image:"https://images.unsplash.com/photo-158947582886-f40ec95dd752?w=600"
},

{
name:"Face Mask",
price:80,
image:"https://images.unsplash.com/photo-158347582886-f40ec95dd752?w=600"
},

{
name:"Hair Oil",
price:160,
image:"https://images.unsplash.com/photo-152335789203-aabd1fc54bc9?w=600"
},

{
name:"Body Wash",
price:220,
image:"https://images.unsplash.com/photo-152335789203-aabd1fc54bc9?w=600"
},

{
name:"Lip Balm",
price:90,
image:"https://images.unsplash.com/photo-152235789203-aabd1fc54bc9?w=600"
}

];

// =====================
// DISPLAY PRODUCTS
// =====================

const container = document.getElementById("productContainer");

function displayProducts(data){

container.innerHTML="";

data.forEach(product=>{

container.innerHTML += `
<div class="product">

<img src="${product.image}">

<div class="product-content">

<h3>${product.name}</h3>


<a href="https://wa.me/919700807006?text=Hello M.S.Pharmacy, I want to order ${product.name}"
target="_blank">

<button class="btn whatsapp-btn">
Order Now
</button>

</a>

</div>

</div>
`;

});

}

displayProducts(products);

// =====================
// SEARCH
// =====================

document.getElementById("searchInput")
.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let filtered = products.filter(item =>
item.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});

// =====================
// CART SYSTEM
// =====================

let cart = [];
let total = 0;

function addToCart(name, price){

cart.push({
name,
price
});

total += price;

document.getElementById("cart-count")
.innerText = cart.length;

document.getElementById("total")
.innerText = total;

updateCart();

}

function updateCart(){

const cartItems =
document.getElementById("cart-items");

cartItems.innerHTML = "";

cart.forEach(item=>{

cartItems.innerHTML += `
<div class="cart-item">
<span>${item.name}</span>
<span>₹${item.price}</span>
</div>
`;

});

}

// =====================
// AUTO IMAGE SLIDER
// =====================

let slides =
document.querySelectorAll(".slide");

let current = 0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current >= slides.length){
current = 0;
}

slides[current].classList.add("active");

},3000);