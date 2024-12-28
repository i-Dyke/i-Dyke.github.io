document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects');
    const buttonsContainer = document.querySelector('.sort-buttons');
    const projects = Array.from(document.querySelectorAll('.project'));

    // Extract unique attributes from the data-attributes
    const attributes = [...new Set(
        projects.flatMap(project => project.dataset.attributes.split(',').map(attr => attr.trim()))
    )];

    // Create sort-buttons dynamically for each attribute
    attributes.forEach(attribute => {
        const button = document.createElement('sort-button');
        button.textContent = attribute.toUpperCase();
        button.className = 'sort-button';
        button.addEventListener('click', () => {
            setSelectedButton(button);
            filterProjects(attribute);
        });
        buttonsContainer.appendChild(button);
    });

    // Function to filter projects
    function filterProjects(attribute) {
        const filteredProjects = projects.filter(project =>
            project.dataset.attributes.split(',').map(attr => attr.trim()).includes(attribute)
        );

        // Clear and re-append filtered projects
        projectsContainer.innerHTML = '';
        filteredProjects.forEach(project => projectsContainer.appendChild(project));

        // Optionally, show non-matching projects (comment the below line if hiding is preferred)
        const nonMatchingProjects = projects.filter(project => !filteredProjects.includes(project));
        nonMatchingProjects.forEach(project => projectsContainer.appendChild(project));
    }

    function setSelectedButton(selectedButton) {
        // Remove 'selected' class from all buttons
        const buttons = buttonsContainer.querySelectorAll('.sort-button');
        buttons.forEach(button => button.classList.remove('selected'));

        // Add 'selected' class to the clicked button
        selectedButton.classList.add('selected');
    }
});
