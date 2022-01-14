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
