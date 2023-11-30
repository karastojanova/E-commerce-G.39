const overlayLeft = document.getElementById ("overlay-left");
const productsLink = document.getElementById ("products");

productsLink.addEventListener("mouseover", function(event){
 overlayLeft.style.display = "block";
});

productsLink.addEventListener("mouseout", function (event){
    overlayLeft.style.display = "none";
});