for (let i = 1; i <= NUM_PAGES; i++) {
  let button = document.createElement("td");
  button.innerHTML = i;
  button.className = "clickable indexbutton";
  let buttonDiv = document.getElementById("create_buttons");
  buttonDiv.appendChild(button);

  function loadContent(result) {
    unloadContent();
    $("#page").html(result);
  }
  button.addEventListener ("click", function() {
    $.ajax({url: "page" + this.innerHTML+ ".html", success: loadContent});
  });
}
