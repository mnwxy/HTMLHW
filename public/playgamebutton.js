function loadContent(result) {
  unloadContent();
  $("#game_content").html(result);
}

function clickButton() {
  $.ajax({
    url: "/game.html",
    success: loadContent
  });
}

$("#play_game_button").click(clickButton);