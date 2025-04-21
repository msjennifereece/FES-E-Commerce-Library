function openMenu() {
  // targeting the body, targeting the classList, adding a "menu--open"
  document.body.classList += " menu--open"
  // when you use classList you need to add a space before 'menu--open' because it is a long string of classes and classes need spaces between them
}

function closeMenu() {
  // targeting the body, targeting the classList, removing the classlist 'menu--close'
  document.body.classList.remove('menu--open') 
}

