function loadNewsJSONAsHTML(result) {
  alert("hi");
  // var html = "";
  // for (var i = 0; i < result.length; i++) {
  //   var nextArticle = result[i];
  //   html += "<h1>" + nextArticle['headline'] + "</h1><br>";
  //   html += "<h2>" + nextArticle['author'] + "</h2><br>";
  //   html += "<p>" + nextArticle['body'] + "</p>"
  // }
  $("#news").html(html);
}

function requestNewsData() {
  $.ajax({
    dataType: "json",
    url: "https://honorstopicshtmlwilltao.appspot.com/Capture.png", //"https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success: loadNewsJSONAsHTML
  })
}

$("#news_button").click(requestNewsData);