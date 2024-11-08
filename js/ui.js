/*DOMContentLoaded
  This ensures that the code inside this function runs only after the entire HTML document has been loaded.
  It’s essential for cases where the JavaScript tries to access elements in the DOM before they exist.
*/

document.addEventListener('DOMContentLoaded', function() {

  //M.Sidenav.init() is a Materialize method that initializes the Sidenav component on the selected elements.
  //This line initializes a side navigation menu (with elements stored in menus/form) to slide in from the right/left side of the screen.

  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});