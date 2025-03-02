document.addEventListener("DOMContentLoaded", function () {
    // ---------------------------------------------------------------------[sidebar]--
    const buttons = document.querySelectorAll("[data-toggle='sidebar']");
    const sidebar = document.getElementById("sidebar");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            sidebar.classList.toggle("layout__sidebar--active");
        });
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !event.target.closest("[data-toggle='sidebar']")) {
            sidebar.classList.remove("layout__sidebar--active");
        }
    });

    // ========================= COLLAPSE FUNCTIONALITY =========================
    const collapseButtons = document.querySelectorAll(".btn--collapse");
    const collapseAllButton = document.getElementById("toggleCollapseAll");
    let allCollapsed = false;

    const toggleIcon = (icon, isCollapsed) => {
        icon?.classList.replace(isCollapsed ? "bi-folder2" : "bi-folder2-open", 
                                isCollapsed ? "bi-folder2-open" : "bi-folder2");
    };

    const toggleFolderCollapse = (folder, isCollapsed) => {
        const sublist = folder.querySelector(".nav__list--collapse");
        if (sublist) {
            sublist.classList.toggle("collapsed", isCollapsed);
            sessionStorage.setItem(`collapsed_${folder.dataset.id}`, isCollapsed);
            toggleIcon(folder.querySelector(".btn--collapse i"), isCollapsed);
        }
    };

    collapseButtons.forEach(button => {
        button.addEventListener("click", function () {
            const parentItem = this.closest(".nav__item--folder");
            if (parentItem) {
                const isCollapsed = parentItem.querySelector(".nav__list--collapse")
                    .classList.toggle("collapsed");
                sessionStorage.setItem(`collapsed_${parentItem.dataset.id}`, isCollapsed);
                toggleIcon(this.querySelector("i"), isCollapsed);
            }
        });
    });

    document.querySelectorAll(".nav__item--folder").forEach(folder => {
        toggleFolderCollapse(folder, sessionStorage.getItem(`collapsed_${folder.dataset.id}`) === "true");
    });

    collapseAllButton?.addEventListener("click", function () {
        allCollapsed = !allCollapsed;
        document.querySelectorAll(".nav__item--folder")
            .forEach(folder => toggleFolderCollapse(folder, allCollapsed));
        toggleIcon(collapseAllButton.querySelector("i"), allCollapsed);
    });

    // ---------------------------------------------------------------------[HIGHLIGHTER MENU]--
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu__link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("menu__link--active"));
        this.classList.add("menu__link--active");
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            let id = entry.target.getAttribute("id");

            // Hapus class 'active' dari semua link
            navLinks.forEach(link => link.classList.remove("menu__link--active"));

            // Tambahkan class 'active' ke menu yang sesuai dengan section saat ini
            let activeLink = document.querySelector(`.menu__link[href*='${id}']`);
            if (activeLink) {
            activeLink.classList.add("menu__link--active");
            }
        }
        });
    }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

    sections.forEach(section => {
        observer.observe(section);
    });



    // ---------------------------------------------------------------------[ROLE TAGLINE]--
    const roleElement = document.querySelector("[data-role]");
    if (roleElement) {  
        const roles = JSON.parse(roleElement.getAttribute("data-role-list"));
        let index = 0;

        function changeRole() {
            roleElement.classList.add("slide-down"); // Mulai animasi turun

            setTimeout(() => {
                index = (index + 1) % roles.length;
                roleElement.textContent = roles[index].option; // Ganti teks
                roleElement.classList.remove("slide-down"); // Reset animasi
            }, 500); // Tunggu sebelum mengubah teks
        }

        setInterval(changeRole, 3000);
    }


    // ---------------------------------------------------------------------[SWITCH THEME and I Switch Icon]--
    const switchTheme = document.getElementById("switchTheme");
    const switchIcon = switchTheme.querySelector(".btn__icon");

    // Check system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Get saved theme from localStorage or use system preference
    const savedTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    // Set initial icon state
    if (savedTheme === "dark") {
        switchIcon.classList.remove("bi-sun");
        switchIcon.classList.add("bi-moon-stars-fill");
    } else {
        switchIcon.classList.remove("bi-moon-stars-fill"); 
        switchIcon.classList.add("bi-sun");
    }

    // Handle theme switch click
    switchTheme.addEventListener("click", function () {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        // Update theme
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        // Update icon
        if (newTheme === "dark") {
            switchIcon.classList.remove("bi-sun");
            switchIcon.classList.add("bi-moon-stars-fill");
        } else {
            switchIcon.classList.remove("bi-moon-stars-fill");
            switchIcon.classList.add("bi-sun");
        }
    });

    // Listen for system theme changes
    prefersDarkScheme.addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
            const newTheme = e.matches ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            
            if (newTheme === "dark") {
                switchIcon.classList.remove("bi-sun");
                switchIcon.classList.add("bi-moon-stars-fill");
            } else {
                switchIcon.classList.remove("bi-moon-stars-fill");
                switchIcon.classList.add("bi-sun");
            }
        }
    });
});