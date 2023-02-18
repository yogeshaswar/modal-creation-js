//Modal
//button
const btn = document.querySelector(".btn");
const deleteBtn = document.querySelector(".modal-btn");
//modal
const modal = document.querySelector(".modal");


//click event listener
btn.addEventListener("click", function() {
    //console.log("Working");
    modal.style.visibility = "visible";
});
//click event listener - modal delete button
deleteBtn.addEventListener("click", function() {
    //console.log("Working");
    modal.style.visibility = "hidden";
});


/**
 * UPCOMING -> 1. Animation
 *             2. Positions etc
 *             3. Responsive using media query
 */