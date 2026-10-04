const openButton = document.getElementById("openButton");
const transition = document.getElementById("transition");

if (openButton) {
    openButton.addEventListener("click", function () {

        openButton.disabled = true;

        if (transition) {
            transition.classList.add("active");
        }

        setTimeout(function () {
            window.location.href = "birthday.html";
        }, 850);

    });
}