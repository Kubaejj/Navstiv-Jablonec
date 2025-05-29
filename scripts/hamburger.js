document.addEventListener("DOMContentLoaded", () => {
    let hamElements = document.querySelectorAll(".header__hamburger, .header__nav");
    for (const btn of document.querySelectorAll(".header__hamburger")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamElements) {
                element.classList.toggle("active");
            }  
        });
    }
});