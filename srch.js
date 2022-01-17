function testpass(){
  var element = document.createElement("div");
    element.appendChild(document.createTextNode('=== works'));
    document.getElementById('autocorrect').appendChild(element);

}
function testpass2(){
  var element = document.createElement("div");
    element.appendChild(document.createTextNode('match works!'));
    document.getElementById('autocorrect').appendChild(element);}
function testfail(){
var element = document.createElement("div");
  element.appendChild(document.createTextNode('nup')) 
  document.getElementById('autocorrect').appendChild(element);
}
function test() {
  var input = document.getElementById('srch').value;
  var element = document.createElement("div");
  //document.body.appendChild(element);
  if (input === 'hi') {
    testpass();
  } 
  else {
    testfail();
    }
  }













function openPage() {
            var x = document.getElementById("search").value;
         if (x === "ro") {
                location.replace("/ro.service");
            }
            if (x === "r.o.") {
                location.replace("/ro.service");
            }
            if (x === "RO") {
                location.replace("/ro.service");
            }
            if (x === "R.O.") {
                location.replace("/ro.service");
            }
            if (x === "R.o.") {
                location.replace("/ro.service");
            }
            if (x === "Ro") {
                location.replace("/ro.service");
            }
            if (x === "ro.") {
                location.replace("/ro.service");
            }
            if (x === "r.o") {
                location.replace("/ro.service");
            }
            if (x === "R.o") {
                location.replace("/ro.service");
            }
            if (x === "about") {
                location.replace("/about");
            }
            if (x === "about us") {
                location.replace("/about");
            }
            if (x === "About Us") {
                location.replace("/about");
            }
            if (x === "About us") {
                location.replace("/about");
            }
             if (x === "About") {
                location.replace("/about");
            }
            if (x === "ABOUT") {
                location.replace("/about");
            } 
            if (x === "ABOUT US") {
                location.replace("/about");
            }
         if (x === "about ") {
                location.replace("/about");
            }
         if (x === "about  us") {
                location.replace("/about");
            }
        }
