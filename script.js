document.addEventListener('DOMContentLoaded', () => {
    const animalImage = document.getElementById('animalImage');
    const refreshButton = document.getElementById('refreshButton');
    const visitorCountElement = document.getElementById('visitorCount');

    // --- Curated List of Baby Animal Image URLs from Pexels ---
    // These are direct links to images of animals with their babies.
    // They are typically optimized by Pexels for a given size (e.g., w=800&h=600).
    const babyAnimalImages = [
        "https://images.pexels.com/photos/17697488/pexels-photo-17697488.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1", // Deer stag and fawn
        "https://images.pexels.com/photos/17411621/pexels-photo-17411621.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1", // Mother cow and calf
        "https://images.pexels.com/photos/15948956/pexels-photo-15948956.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1", // Brown bear with cub
        "https://images.pexels.com/photos/18260273/pexels-photo-18260273.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1", // Adult cat with kittens
        "https://images.pexels.com/photos/10183053/pexels-photo-10183053.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1", // Mother sheep with lamb
        "https://images.pexels.com/photos/16896001/pexels-photo-16896001/free-photo-of-close-up-of-mother-and-baby-monkeys.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1", // Mother and baby monkeys
        "https://images.pexels.com/photos/14872134/pexels-photo-14872134.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1", // Alpaca with baby
        "https://images.pexels.com/photos/16478952/pexels-photo-16478952/free-photo-of-two-fluffy-goslings-walking-on-green-grass.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" // Goose with goslings
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
