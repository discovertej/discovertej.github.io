document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-section');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            // Hide all sections first
            document.querySelectorAll('.content-section').forEach(sec => {
                sec.classList.add('hidden');
                sec.classList.remove('visible');
            });
            
            // Show the clicked section
            section.classList.remove('hidden');
            section.classList.add('visible');
        });
    });
});
