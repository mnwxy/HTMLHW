var pageNumber = 2;
const NUM_PAGES = 2;
pages = new Array(NUM_PAGES);
for(i = 1; i <= NUM_PAGES; i++)
{
  pages[i] = FileReader.readAsText("page" + i + ".html");
}

document.getElementById("rightArrow")
  .addEventListener("click", function(event){
    pageNumber = (pageNumber + 1) % NUM_PAGES;
    document.getElementById("test").innerHTML = pages[i];
  });
  document.getElementById("leftArrow")
    .addEventListener("click", function(event){
      pageNumber = (pageNumber - 1) % NUM_PAGES;
      document.getElementById("page").setAttribute("src", "page" + (pageNumber+1) + ".html");
    });
