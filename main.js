var btn = document.getElementById('imenu');
var menu = document.getElementById('items');

btn.addEventListener("click" , function() {
   if(menu.style.display == "none"){
       menu.style.display = "block"
   }
   else{
       menu.style.display = "none"
   }
});
