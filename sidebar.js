var cart = document.querySelector('#cart')
var cartContent = document.querySelector('#cart-content')
var bell = document.querySelector('#bell')
var bellContent = document.querySelector('#bell-content')
var user = document.querySelector('#user')
var userContent = document.querySelector('#user-content')

var mainSearch = document.querySelector('#main-search')
var searchCard = document.querySelector('#search-card')

cart.addEventListener('click', () => {
    cartContent.classList.toggle('open')
})

bell.addEventListener('click', () => {
    bellContent.classList.toggle('open')
})

user.addEventListener('click', () => {
    userContent.classList.toggle('open')
})

mainSearch.addEventListener('focus', () => {
    searchCard.style.display = 'block'
})

searchCardClose.addEventListener('click', () => {
    console.log('clicked!');
})