// Select the elements for the burger menu and navigation
const burger = document.querySelector('.burger'); // The burger icon
const navbar = document.querySelector('.navbar'); // The main navigation bar
const navList = document.querySelector('.nav-list'); // The navigation list
const navbarOrderBtn = document.querySelector('.navbar-order-btn'); // The "Order Now" button

// Add a click event listener to the burger menu
burger.addEventListener('click', () => {
  // Toggle classes for responsiveness
  navList.classList.toggle('v-class-resp'); // Toggle vertical visibility for nav list
  navbarOrderBtn.classList.toggle('v-class-resp'); // Toggle vertical visibility for the order button
  navbar.classList.toggle('h-nav-resp'); // Toggle horizontal layout for navbar
});


