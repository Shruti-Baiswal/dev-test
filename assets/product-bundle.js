document.addEventListener('DOMContentLoaded', function () {

  const addBtn = document.querySelector('.product-form__submit');
  const form = document.querySelector('.product-form');
  const mainQtyInput = document.querySelector('[name="quantity"]');
  const additional = document.querySelector('.additional-product');
  const container = document.getElementById('title-container');

     console.log("maindata",mainQtyInput);
   console.log("form",form);
  let bundleVariantId = null;

  if (additional) {

    additional.addEventListener('click', function (event) {

      if (event.target.closest('.addon-qty')) return;

     additional.classList.toggle('active');

if (additional.classList.contains('active')) {
  bundleVariantId = additional.dataset.variantId;

  var title = additional.querySelector('.addon-title').innerText;
  container.style.display = 'block';

} else {
  bundleVariantId = null;

  title = '';
  container.style.display = 'none';
}
console.log("title",title);

    });
    additional.querySelector('.qty-plus').addEventListener('click', function () {
      const qty_info = additional.querySelector('.addon-quantity');
      qty_info.value = Number(qty_info.value) + 1;
    });

    additional.querySelector('.qty-minus').addEventListener('click', function () {
      const qty_info = additional.querySelector('.addon-quantity');
      if (qty_info.value > 1) {
        qty_info.value = Number(qty_info.value) - 1;
      }
    });
  }

  addBtn.addEventListener('click', function (event) {

    event.preventDefault();
    event.stopImmediatePropagation();

    const mainVariantId = form.querySelector('[name="id"]').value;
    const mainQtyInput = document.querySelector('[name="quantity"]');
    const mainQty = mainQtyInput ? mainQtyInput.value : 1;

    let items = [];
    items.push({
      id: mainVariantId,
      quantity: Number(mainQty)
    });
    console.log("data",items);

    if (bundleVariantId && additional) {
      items.push({
        id: bundleVariantId,
        quantity: Number(additional.querySelector('.addon-quantity').value)
      });
    }


fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ items })
})
.then(() => {
  updateDrawer();
});

function updateDrawer() {

  fetch('/?sections=cart-drawer')
    .then(res => res.json())
    .then(data => {

      const oldDrawer = document.querySelector('cart-drawer');
      if (!oldDrawer) return;

      oldDrawer.outerHTML = data['cart-drawer'];
      //  console.log("data",data['cart-drawer']);

      const newDrawer = document.querySelector('cart-drawer');
      console.log("cartdata",newDrawer);
      newDrawer.classList.add('active');
      document.body.classList.add('overflow-hidden');
    });
}
  });
});
