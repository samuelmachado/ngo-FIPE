

function addOption(selectID, optionSelect) {
  if(optionSelect.value == undefined || optionSelect.value == "") {
    throw new Error("Preencha o option value")
  }

  if(optionSelect.text == undefined || optionSelect.text == "") {
    throw new Error("Preencha o option text")
  }

  var option = document.createElement("option");
  option.text = optionSelect.text;
  option.value = optionSelect.value;
  var select = document.getElementById(selectID);
  select.appendChild(option);
}