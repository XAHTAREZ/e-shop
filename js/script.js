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


// Работа с данными

const getGoods = () => {

  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('/e-shop/db/db.json')
    .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('data', JSON.stringify(data));
        console.log(data);
  })
  }
  
  links.forEach(link => {   
    link.addEventListener('click', (event) => {
      event.preventDefault();
      getData();
    })
  });
}


getGoods();
