window.onload = function () {
    const navLinks = document.querySelectorAll('.navbar a');
    const moreSection = document.getElementById("more");
    const workSection = document.getElementById("work");
    const seeMoreBtn = document.getElementById("see-more-btn");

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const checkbox = document.getElementById('check');
            checkbox.checked = false;
        });
    });

    moreSection.style.display = "none";
    workSection.style.display = "none";

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href.startsWith('pages/')) { // Check if it's a link to another page
                // Allow the default link behavior
                window.location.href = href;
            } else {
                event.preventDefault();
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');

                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // See More button functionality
    seeMoreBtn.addEventListener("click", function (event) {
        event.preventDefault();
        moreSection.style.display = "block"; 
        workSection.style.display = "none"; 
        moreSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Show Work Experiences section when the corresponding button is clicked
    const workExperienceBtn = document.querySelector('.main-text a[href="#work"]');
    workExperienceBtn.addEventListener("click", function (event) {
        event.preventDefault();
        workSection.style.display = "block"; 
        moreSection.style.display = "none"; 
        workSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Show Projects section when the corresponding button is clicked
    const myProjectsBtn = document.querySelector('.main-work a[href="#more"]');
    myProjectsBtn.addEventListener("click", function (event) {
        event.preventDefault();
        moreSection.style.display = "block"; 
        workSection.style.display = "none"; 
        moreSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Back Button Functionality
    const backBtns = document.querySelectorAll('.back-btn');
    backBtns.forEach(backBtn => {
        backBtn.addEventListener("click", function (event) {
            event.preventDefault();
            moreSection.style.display = "none"; 
            workSection.style.display = "none"; 
            const aboutSection = document.getElementById("about");
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
};