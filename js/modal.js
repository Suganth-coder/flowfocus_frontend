// JavaScript to handle modal functionality
function openLoginModal() {
    var modal = document.getElementById("loginModal");
    modal.classList.add("open");
    setTimeout(() => {
        modal.querySelector(".modal-contentis").style.opacity = 1;
        modal.querySelector(".modal-contentis").style.transform = "scale(1)";
    }, 50);
}
function closeLoginModal() {
    var modal = document.getElementById("loginModal");
    modal.querySelector(".modal-contentis").style.opacity = 0;
    modal.querySelector(".modal-contentis").style.transform = "scale(0.8)";
    // Wait for the transition to complete before hiding the modal
    setTimeout(() => {
        modal.classList.remove("open");
    }, 300);
}


function openSettings() {
    var modal = document.getElementById("settings");
    modal.classList.add("open");
    setTimeout(() => {
        modal.querySelector(".settings-container").style.opacity = 1;
        modal.querySelector(".settings-container").style.transform = "scale(1)";
    }, 50);
}

function closeSettings() {
    var modal = document.getElementById("settings");
    modal.querySelector(".settings-container").style.opacity = 0;
    modal.querySelector(".settings-container").style.transform = "scale(0.8)";
    // Wait for the transition to complete before hiding the modal
    setTimeout(() => {
        modal.classList.remove("open");
    }, 300);
}

document.querySelector(".login-button").addEventListener("click", openLoginModal);
document.querySelector(".settings-btn").addEventListener("click", openSettings);