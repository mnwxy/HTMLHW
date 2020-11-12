var pageNumber = 2;
const NUM_PAGES = 2;
function unloadContent()
{
  $("#page").html("");
}

function loadContent(result)
{
  unloadContent();
  $("#page").html(result);
}
function changePage(input)
{
  pageNumber = (pageNumber + parseInt(input.data.direction)) % NUM_PAGES;
  unloadContent();
  $.ajax({url: "/public/page" + (pageNumber+parseInt(input.data.direction)) + ".html", success: loadContent});
}

$("#rightArrow").click({direction: 1},changePage);

// document.getElementById("rightArrow")
//   .addEventListener("click", function(event){
//     pageNumber = (pageNumber + 1) % NUM_PAGES;
//     document.getElementById("page").setAttribute("src", "page" + (pageNumber+1) + ".html");
//   });
//   document.getElementById("leftArrow")
//     .addEventListener("click", function(event){
//       pageNumber = (pageNumber - 1) % NUM_PAGES;
//       document.getElementById("page").setAttribute("src", "page" + (pageNumber+1) + ".html");
//     });
