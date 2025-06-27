document.addEventListener('DOMContentLoaded', () => {
    const animalImage = document.getElementById('animalImage');
    const refreshButton = document.getElementById('refreshButton');
    const visitorCountElement = document.getElementById('visitorCount');

    // --- Curated List of Baby Animal Image URLs from Pexels ---
    // These are direct links to images of animals with their babies.
    // They are typically optimized by Pexels for a given size (e.g., w=800&h=600).
    const babyAnimalImages = [
        "https://images.pexels.com/photos/2134246/pexels-photo-2134246.jpeg",
        "https://images.pexels.com/photos/17213949/pexels-photo-17213949.jpeg",
        "https://images.pexels.com/photos/28554641/pexels-photo-28554641.jpeg",
        "https://images.pexels.com/photos/5125391/pexels-photo-5125391.jpeg",
        "https://images.pexels.com/photos/10884443/pexels-photo-10884443.jpeg",
        "https://images.pexels.com/photos/2134246/pexels-photo-2134246.jpeg",
        "https://images.pexels.com/photos/1289845/pexels-photo-1289845.jpeg",
        "https://images.pexels.com/photos/2677843/pexels-photo-2677843.jpeg"
    ];

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

    // --- Display Random Animal Image from List ---
    const displayRandomAnimal = () => {
        if (babyAnimalImages.length === 0) {
            animalImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f00'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='40' fill='%23fff'%3ENo Images Added Yet!%3C/text%3E%3C/svg%3E";
            animalImage.alt = "No images to display.";
            console.error("No baby animal images found in the list. Please add URLs to the 'babyAnimalImages' array.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * babyAnimalImages.length);
        animalImage.src = babyAnimalImages[randomIndex];
        animalImage.alt = "A random baby animal";
    };

    // --- Event Listener for Refresh Button ---
    refreshButton.addEventListener('click', () => {
        // Just reload the page, which will trigger displayRandomAnimal() again
        location.reload(); 
    });

    // Initial load of an animal image
    displayRandomAnimal();
});
