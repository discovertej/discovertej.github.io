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
            // Using thepetapi.com which often provides animal and baby
            const response = await fetch('https://api.thepetapi.com/random-animal');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Assuming the API returns a direct image URL or a field containing it
            // You might need to inspect the API response structure if this URL isn't directly 'data.image'
            // For thepetapi, it often returns a redirect, so we'll directly set the URL.
            // If the API gives a JSON with a URL field, you'd use data.imageUrl or similar.
            animalImage.src = data.image_url; // This should be the direct image URL from the API response
            animalImage.alt = "A random animal with its baby";
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
