// JS code goes here
const submitButton = document.getElementById("submit");
const nameField = document.getElementById("name");
const mobileField = document.getElementById("mobile");
const emailField = document.getElementById("email");
const showError = document.getElementById("error");

submitButton.addEventListener("click", function () {
  let flag = false;

  if (!flag) {
    const regExpName = /^[a-zA-Z\s]*$/g;
    const regExpMobile = /^[0-9]*$/g;
    const regExpEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
    if (
      !(
        regExpName.exec(nameField.value) &&
        nameField.value.length > 0 &&
        nameField.value.length <= 20
      ) ||
      !(
        regExpMobile.exec(mobileField.value) && mobileField.value.length == 10
      ) ||
      !(
        regExpEmail.exec(emailField.value) &&
        emailField.value.length > 0 &&
        emailField.value.length < 40
      )
    ) {
      showError.style.display = "block";
      flag = true;
    }
  }

  if (!flag) {
    const valueObj = {
      name: nameField.value,
      mobile: mobileField.value,
      email: emailField.value,
    };
    window.contactsList.push(valueObj);

    const contactList = window.contactsList[window.contactsList.length - 1];

    var tbodyRef = document
      .getElementById("summaryTable")
      .getElementsByTagName("tbody")[0];
    console.log(tbodyRef);
    var newRow = tbodyRef.insertRow();
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(contactList.name);
    newCell.appendChild(newText);

    var newCell = newRow.insertCell();
    var newText = document.createTextNode(contactList.mobile);
    newCell.appendChild(newText);

    var newCell = newRow.insertCell();
    var newText = document.createTextNode(contactList.email);
    newCell.appendChild(newText);

    nameField.value = null;
    mobileField.value = null;
    emailField.value = null;
  }
});

document.getElementById("nameColumn").addEventListener("click", function () {
  sortTable();
});

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("summaryTable");
  switching = true;

  /*Make a loop that will continue until no switching has been done:*/
  while (switching) {
    switching = false; //start by saying: no switching is done:
    rows = table.rows;
    /*Loop through all table rows (except the first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false; //start by saying there should be no switching:
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
