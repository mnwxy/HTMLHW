var pageNumber = 2;
const NUM_PAGES = 5;

function unloadContent() {
  $("#page").html("");
}

function loadContent(result) {
  unloadContent();
  $("#page").html(result);
}

function changePage(input) {
  pageNumber = (pageNumber + parseInt(input.data.direction)) % NUM_PAGES;
  unloadContent();
  $.ajax({
    url: "/page" + (pageNumber + parseInt(input.data.direction)) + ".html",
    success: loadContent
  });
}

$("#right_arrow").click({
  direction: 1
}, changePage);
