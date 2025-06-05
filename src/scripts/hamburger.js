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
document.addEventListener('DOMContentLoaded', function () {
    const navLis = document.querySelectorAll('.nav__row');

    navLis.forEach(li => {
        const trigger = li.querySelector('.nav__item');
        if (!trigger) return;

        trigger.addEventListener('click', function (e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                navLis.forEach(otherLi => {
                    if (otherLi !== li) otherLi.classList.remove('open');
                });
                li.classList.toggle('open');
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (window.innerWidth >= 768) return;
        navLis.forEach(li => {
            if (!li.contains(e.target)) li.classList.remove('open');
        });
    });
});
// import Clarity from '@microsoft/clarity';
// const projectId = "runwugsjy5"

// Clarity.init(projectId);