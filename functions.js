

function addOption(selectID, text, value) {


  var option = document.createElement("option");
  option.text = text;
  option.value = value ;
  var select = document.getElementById(selectID);
  select.appendChild(option);
}