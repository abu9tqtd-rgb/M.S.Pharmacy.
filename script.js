const products=['Paracetamol','Dolo 650','Crocin','Vitamin C','ORS','Bandage','Dettol','Horlicks','Boost','Baby Lotion'];
const box=document.getElementById('products');
function show(list){box.innerHTML=list.map(p=>`<div class='card'><h3>${p}</h3><button onclick="window.open('https://wa.me/919700807006?text=I want to order ${p}')">Order Now</button></div>`).join('')}
show(products);
document.getElementById('search').oninput=e=>show(products.filter(x=>x.toLowerCase().includes(e.target.value.toLowerCase())));