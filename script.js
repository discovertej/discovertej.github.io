document.addEventListener('DOMContentLoaded', () => {
    const animalImage = document.getElementById('animalImage');
    const refreshButton = document.getElementById('refreshButton');
    const visitorCountElement = document.getElementById('visitorCount');

    // --- Curated List of Baby Animal Image URLs ---
    // IMPORTANT: Replace these example URLs with actual direct links to your chosen baby animal images.
    // Make sure these are direct links ending in .jpg, .png, etc.
    const babyAnimalImages = [
        "https://images.pexels.com/photos/17697488/pexels-photo-17697488/free-photo-of-wild-red-deer-stag-and-fawn.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        "https://images.pexels.com/photos/17411621/pexels-photo-17411621/free-photo-of-close-up-of-mother-cow-and-calf-on-field.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        "https://images.pexels.com/photos/15948956/pexels-photo-15948956/free-photo-of-close-up-of-a-brown-bear-with-its-cub.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        "https://images.pexels.com/photos/18260273/pexels-photo-18260273/free-photo-of-two-small-kittens-walking-on-a-pavement-beside-an-adult-cat.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        "https://images.pexels.com/photos/10183053/pexels-photo-10183053.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        // Add more image URLs here to increase the variety!
        // Example: "https://your-image-hosting.com/image-of-baby-elephant.jpg",
        // Example: "https://another-site.net/puppy-and-mom.png"
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
        location.reload(); // Reloads the entire page
    });

    // Initial load of an animal image
    displayRandomAnimal();
});
