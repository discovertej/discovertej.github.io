document.addEventListener('DOMContentLoaded', () => {
    const animalImage = document.getElementById('animalImage');
    const refreshButton = document.getElementById('refreshButton');
    const visitorCountElement = document.getElementById('visitorCount');

    // --- Visitor Counter Logic ---
    let visitorCount = localStorage.getItem('animalPageVisitorCount');
    if (visitorCount === null) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount);
    }
    visitorCount++; // Increment count on each visit/load
    localStorage.setItem('animalPageVisitorCount', visitorCount);
    visitorCountElement.textContent = visitorCount;

    // --- Fetch Random Animal Image ---
    const fetchRandomAnimal = async () => {
        // Show a placeholder or loading state
        animalImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23ccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='40' fill='%23666'%3ELoading Animal...%3C/text%3E%3C/svg%3E";
        animalImage.alt = "Loading...";

        try {
            // Using Unsplash for random animal images.
            // This URL fetches a random image with "animal" tag, sized 800x600.
            // It will be a general animal, not necessarily with a baby.
            // Adding a timestamp to the URL helps ensure a new image by busting browser cache.
            const imageUrl = `https://source.unsplash.com/random/800x600/?animal&${new Date().getTime()}`;
            
            animalImage.src = imageUrl; 
            animalImage.alt = "A random animal";
        } catch (error) {
            console.error("Error fetching random animal:", error);
            animalImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f00'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='40' fill='%23fff'%3EError Loading Image%3C/text%3E%3C/svg%3E";
            animalImage.alt = "Error loading image.";
        }
    };

    // --- Event Listener for Refresh Button ---
    refreshButton.addEventListener('click', () => {
        location.reload(); // Reloads the entire page
    });

    // Initial load of an animal image
    fetchRandomAnimal();
});
