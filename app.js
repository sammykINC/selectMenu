const selectField = document.querySelector('.selectField');
const selectText = document.querySelector('.selectText');
const listOption = document.getElementsByClassName('listOption');
const smList = document.querySelector('.smList');
const arrowIcon = document.querySelector('.arrowIcon');

for (selectedLi of listOption) {
  selectedLi.onclick = function() {
    selectText.innerHTML = this.textContent;
    arrowIcon.classList.toggle("arrowRotation");
    smList.classList.toggle("hideList");
  }
}

selectField.onclick = function() {
  smList.classList.toggle("hideList");
  smList.style.animation = "dropAnimation 0.3s ease-in-out";
  arrowIcon.classList.toggle("arrowRotation");
}
