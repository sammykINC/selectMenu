const selectField = document.querySelector('.selectField');
const selectText = document.querySelector('.selectText');
const listOption = document.getElementsByClassName('listOption');
const smList = document.querySelector('.smList');
const arrowIcon = document.querySelector('.arrowIcon');
const hero = document.querySelector(".hero");

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

window.onclick = function(e) {
  if (e.target == hero) {
    smList.classList.toggle("hideList");
    arrowIcon.classList.toggle("arrowRotation");
  } 
}