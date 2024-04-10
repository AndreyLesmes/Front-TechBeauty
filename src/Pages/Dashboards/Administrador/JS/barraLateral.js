document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".toggle");
    const menuDashboard = document.querySelector(".menu-dashboard");
    const iconoMenu = document.querySelector(".toggle i"); 
    const enlacesMenu = document.querySelectorAll(".enlace"); 
    const cerrarSe = document.querySelector(".CS");
    const menuLinks = document.querySelectorAll(".menu .enlace a");

    toggle.addEventListener("click", () => { 
        menuDashboard.classList.toggle("open");

        if (iconoMenu.classList.contains("bi-list")) {
            iconoMenu.classList.replace("bi-list", "bi-x");
        } else {
            iconoMenu.classList.replace("bi-x", "bi-list");

            const submenus = document.querySelectorAll(".list__show");
            submenus.forEach(submenu => {
                submenu.style.height = "0";
            });

            const submenuIcons = document.querySelectorAll(".bi-arrow-down");
            submenuIcons.forEach(submenuIcon => {
                submenuIcon.style.transform = "rotate(0deg)";
            });
        }
    });

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", () => {
            menuDashboard.classList.add("open");
            iconoMenu.classList.replace("bi-list", "bi-x");
        });
    });

    cerrarSe.addEventListener("click", () => {
        menuDashboard.classList.add("open");
        iconoMenu.classList.replace("bi-list", "bi-x");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (!menuDashboard.classList.contains("open")) {
                e.preventDefault();
            }
        });
    });

    let listElements = document.querySelectorAll(".list__button--click");

    listElements.forEach(listElement => {
        listElement.addEventListener('click', ()=>{
            listElement.classList.toggle('arrow');

            let height = 0;
            let menu = listElement.nextElementSibling;
            const submenuIcon = listElement.querySelector(".bi-arrow-down");

            if(menu.clientHeight == "0"){
                height=menu.scrollHeight;
                submenuIcon.style.transform = "rotate(180deg)";
            }else {
                height = 0;
                submenuIcon.style.transform = "rotate(0deg)";
            }

            menu.style.height = height+'px';
        })
    });
});
