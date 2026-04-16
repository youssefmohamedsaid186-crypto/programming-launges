// Simple routing logic to switch views based on sidebar clicks

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a, .sidebar-footer a, [data-view]');
    const views = document.querySelectorAll('.view');

    function switchView(viewId) {
        // Hide all views
        views.forEach(view => {
            view.classList.remove('active');
        });

        // Remove active class from all sidebar links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });

        // Show the target view
        const targetView = document.getElementById(`view-${viewId}`);
        if (targetView) {
            targetView.classList.add('active');
        }

        // Highlight the corresponding sidebar link if it exists
        const targetLink = document.querySelector(`.nav-links a[data-view="${viewId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }

        // Optional: Scroll back to the top of main content
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.scrollTop = 0;
        }
    }

    // Attach click events
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default anchor behavior
            const isAnchor = link.tagName.toLowerCase() === 'a';
            const hasDataView = link.hasAttribute('data-view');
            
            if (isAnchor && hasDataView && link.getAttribute('href') === '#') {
                e.preventDefault();
            }

            const viewId = link.getAttribute('data-view');
            if (viewId) {
                switchView(viewId);
            }
        });
    });

    // Form submission prevention (for visual purposes)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('تم تسجيل الدخول بنجاح! (Login Successful!)');
            switchView('home'); // Redirect back to home
        });
    }
});
