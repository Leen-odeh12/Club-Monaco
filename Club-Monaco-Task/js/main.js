const sec=document.getElementsByName("section");
var divElement = document.getElementsByName("col-lg-4");
var elements = document.querySelectorAll('.col-lg-4');
const d=document.getElementsByClassName("dis");

var isVisible = true;

function showFilters() {
    var filters = document.getElementById("filters");
    filters.style.display = (filters.style.display === "none" || filters.style.display === "") ? "block" : "none";
    for (var i = 0; i < elements.length; i++) {
    if (isVisible) { 
      d[i].style.marginLeft = "300px";
      elements[i].classList.replace('col-lg-4', 'col-lg-3');
     
    } else {
      d[i].style.marginLeft = "0px";
      elements[i].classList.replace('col-lg-3', 'col-lg-4');
    }
  }
  isVisible = !isVisible;
}




var showFiltersButton = document.querySelector('.btn');
showFiltersButton.addEventListener('click', showFilters);


function showFilters() {
  var filters = document.getElementById("filters");
  filters.style.display = (filters.style.display === "none" || filters.style.display === "") ? "block" : "none";

  var hiddenElement = document.getElementById("hiddenElement");
  hiddenElement.style.display = (isVisible) ? "none" : "block";

  for (var i = 0; i < elements.length; i++) {
      if (isVisible) { 
          d[i].style.marginLeft = "300px";
          elements[i].classList.replace('col-lg-4', 'col-lg-3');
      } else {
          d[i].style.marginLeft = "0px";
          elements[i].classList.replace('col-lg-3', 'col-lg-4');
      }
  }
  isVisible = !isVisible;
}
