// toggle icon navbar
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");

    // Function to toggle the menu on mobile
    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // Function to handle highlighting the active link
    function highlightActiveLink() {
        const scrollY = window.scrollY;

        navLinks.forEach((link) => {
            const sectionId = link.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollY >= sectionTop - 150 && scrollY < sectionTop + sectionHeight - 150) {
                    navLinks.forEach((link) => link.classList.remove("active"));
                    link.classList.add("active");
                }
            }
        });
    }

    // Call the function when the page loads and when scrolling
    window.addEventListener("load", highlightActiveLink);
    window.addEventListener("scroll", highlightActiveLink);
});







document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('header nav a');

    // Add a click event listener to each navbar link.
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the "active" class from all links.
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            // Add the "active" class to the clicked link.
            link.classList.add('active');
        });
    });
});



    
    
    
    
    
    
    
    
    
    // const menuIcon = document.getElementById('menu-icon');
    // const mobileMenu = document.querySelector('.mobile-menu');

    // // Toggle the mobile menu when the menu icon is clicked
    // menuIcon.addEventListener('click', () => {
    //     mobileMenu.classList.toggle('show');
    // });

    // // Close the mobile menu when a link is clicked
    // mobileMenu.addEventListener('click', () => {
    //     mobileMenu.classList.remove('show');
    // });
