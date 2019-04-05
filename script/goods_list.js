var btnBasket = document.getElementById('basket-btn');
var goodsListSection = document.getElementById('goods-list-section');
const goods = [
    { title : 'Товар', price : 'Цена', src : 'image/products_photo/zefir_photo/zefir_7.jpg' },
    { title : 'Зефир', price : 300, src : 'image/products_photo/zefir_photo/zefir_7.jpg' },
    { title : 'Маршмеллоу', price : 400, src : 'image/products_photo/marshmelo_photo/marsh_3.jpg' },
    { title : 'Маршмеллоу на палочке', price : 500, src : 'image/products_photo/marsh_on_stick_photo/onstick_4_2.jpg' }
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-list__product-box">
    <span class="goods-list__product-box__name">${title}</span>
    <div class="goods-list__product-box__price">${price}</div>
    
    <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
    </div>`
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
    goodsListSection.style.display = 'block';
};

//renderGoodsList(goods);
btnBasket.addEventListener ('click',renderGoodsList(goods));
