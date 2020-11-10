var pageNumber = 2;
const NUM_PAGES = 2;

document.getElementById("rightArrow")
  .addEventListener("click", function(event){
    pageNumber = (pageNumber + 1) % NUM_PAGES;
    document.getElementById("page").setAttribute("src", "page" + (pageNumber+1) + ".html");
  });
  document.getElementById("leftArrow")
    .addEventListener("click", function(event){
      pageNumber = (pageNumber - 1) % NUM_PAGES;
      document.getElementById("page").setAttribute("src", "page" + (pageNumber+1) + ".html");
    });
