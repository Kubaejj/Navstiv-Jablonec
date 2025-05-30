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
    const navLis = document.querySelectorAll('.nav__li');

    navLis.forEach(li => {
        const trigger = li.querySelector('.nav__item');
        if (!trigger) return;

        trigger.addEventListener('click', function (e) {
            // Pouze na mobilu
            if (window.innerWidth < 768) {
                e.preventDefault();
                // Zavřít ostatní dropdowny
                navLis.forEach(otherLi => {
                    if (otherLi !== li) otherLi.classList.remove('open');
                });
                // Přepnout aktuální
                li.classList.toggle('open');
            }
        });
    });

    // Zavřít dropdown při kliknutí mimo
    document.addEventListener('click', function (e) {
        if (window.innerWidth >= 768) return;
        navLis.forEach(li => {
            if (!li.contains(e.target)) li.classList.remove('open');
        });
    });
});