'use strict';


// Поиск

const search = () => {
  
  const inputSearch = document.querySelector('.search-block > input');
  const btnSearch = document.querySelector('.search-block > button');

  btnSearch.addEventListener('click', () => {
    console.log(inputSearch.value);
});

}

search();


// Корзина

const cart = () => {

  const cartBtn = document.querySelector('.button-cart');
  const modalCart = document.querySelector('#modal-cart');
  const modalClose = document.querySelector('.modal-close')

  cartBtn.addEventListener('click', () => {
    modalCart.style.display = 'flex';
  });

  modalClose.addEventListener('click', () => {
    modalCart.style.display = 'none';
  });
}

cart();