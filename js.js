
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const allLinks = document.querySelectorAll('.nav-links a'); // <<-- أضفنا هذا

    if (menuIcon && navLinks) {
        // لفتح وإغلاق القائمة عند الضغط على الأيقونة
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // لإغلاق القائمة عند الضغط على أي رابط بداخلها
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }