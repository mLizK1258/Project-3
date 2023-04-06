function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("process-containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
};