// 1] Query the selector with the class .icon and assign to a const variable
const plusIcon = document.querySelector(`.icon`);

// 2] Query the selector with the ID #rspnsnav and assign to a const variable
const adddropdown = document.querySelector(`#rspnsnav`)

// 3] Query the selector with the class .icon and assign to a const variable
const turnAnim = document.querySelector(`.icon`);

// 4] Create the "Event Listener"
plusIcon.addEventListener("click", toggleFunction);

// 5] Create the function that will handle the event
function toggleFunction() {
    adddropdown.classList.toggle("dropdown");
    turnAnim.classList.toggle("turn");

}