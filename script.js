document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Calculate offset for fixed header
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Project Modal Logic
    const modal = document.getElementById('projectModal');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    const closeButton = document.querySelector('.modal .close-button');

    // Placeholder project data (replace with your actual data)
    // It's better to fetch this from a JSON file or define it more robustly for many projects
    const projectData = {
        1: {
            title: "Project Alpha - Library Management System",
            description: "Project Alpha is a Library Management System I have add new features in it and its different from other Library Management systems.",
            techStack: [ "Python", "Sql"],
            liveLink: "#", // Replace with actual live link
            repoLink: "https://github.com/HussainHaider-Dev/Library-Management-System"  // Replace with actual repo link
        },
        2: {
            title: "Project Beta - Mobile-First E-commerce Platform",
            image: "https://via.placeholder.com/800x450.png?text=Project+Beta+Detailed",
            description: "Project Beta is an e-commerce platform optimized for mobile devices. It includes features like product browsing, cart management, secure checkout integration with Stripe, and an admin panel for managing products and orders. Built with a focus on performance and user experience.",
            techStack: ["Vue.js", "Next.js", "Tailwind CSS", "Firebase", "Stripe API"],
            liveLink: "#",
            repoLink: "#"
        },
        3: {
            title: "Project Gamma - Data Visualization Dashboard",
            image: "https://via.placeholder.com/800x450.png?text=Project+Gamma+Detailed",
            description: "This project involved creating an interactive dashboard for visualizing complex datasets. Using D3.js, the dashboard allows users to explore data through various charts and graphs, filter information, and gain insights. The main goal was to present data in an intuitive and accessible manner.",
            techStack: ["Python (Flask/Django for backend - optional)", "D3.js", "JavaScript", "Pandas"],
            liveLink: "#",
            repoLink: "#"
        }
        // Add more project details here, matching the data-project-id
    };

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.closest('.project-card').dataset.projectId;
            const data = projectData[projectId];

            if (data) {
                document.getElementById('modalProjectImage').src = data.image;
                document.getElementById('modalProjectTitle').textContent = data.title;
                document.getElementById('modalProjectDescription').textContent = data.description;

                const techStackContainer = document.getElementById('modalProjectTechStack');
                techStackContainer.innerHTML = ''; // Clear previous tech stack
                data.techStack.forEach(tech => {
                    const badge = document.createElement('span');
                    badge.classList.add('tech-badge');
                    badge.textContent = tech;
                    techStackContainer.appendChild(badge);
                });

                const liveLink = document.getElementById('modalProjectLiveLink');
                const repoLink = document.getElementById('modalProjectRepoLink');

                liveLink.href = data.liveLink;
                repoLink.href = data.repoLink;

                liveLink.style.display = data.liveLink && data.liveLink !== "#" ? 'inline-block' : 'none';
                repoLink.style.display = data.repoLink && data.repoLink !== "#" ? 'inline-block' : 'none';

                modal.style.display = 'block';
            } else {
                console.error("Project data not found for ID:", projectId);
            }
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal if user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Optional: Close modal with Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

