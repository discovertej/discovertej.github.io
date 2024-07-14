console.log('JavaScript file is linked correctly.');

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-section');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            // Hide all sections first
            document.querySelectorAll('.content-section').forEach(sec => sec.classList.add('hidden'));
            
            // Show the clicked section
            section.classList.remove('hidden');
            section.classList.add('visible');
        });
    });
});
