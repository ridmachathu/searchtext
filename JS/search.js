//Search a specific site rather than the entire Web.
function search() {
  //Replace sample domain name below with your own domain name.
  var site = "wikipedia.org";

  var lookfor = document.getElementById("txtlookfor").value;
  if (lookfor.length > 0) {
    /* var query =
      "http://www.google.com/search?q=" +
      encodeURIComponent(lookfor) +
      "site:" +
      site;
    location.href = query;*/
    //variable
    var ddchoice = document.getElementById("dropdown").value;
    if (ddchoice == 1) {
      var query =
        "http://www.bing.com/search?q=" +
        encodeURIComponent(lookfor) +
        " site:" +
        site;
    } else {
      var query =
        "http://www.google.com/search?q=" +
        encodeURIComponent(lookfor) +
        " site:" +
        site;
    }
    location.href = query;
  } else {
    alert("Please type the word or words for which you want to search.");
  }
}
