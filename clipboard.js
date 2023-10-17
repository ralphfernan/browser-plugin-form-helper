document.getElementById("btn0").addEventListener("click", toClipboard);
function toClipboard() {
  // Get the text field
  var copyText = document.getElementById("inp0");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  //alert("Copied the VM Name: " + copyText.value);
}