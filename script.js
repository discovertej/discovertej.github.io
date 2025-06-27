document.addEventListener('DOMContentLoaded', () => {
    const animalImage = document.getElementById('animalImage');
    const refreshButton = document.getElementById('refreshButton');
    const visitorCountElement = document.getElementById('visitorCount');
    
    // Get the h1 element in the header-bubble (it will now display text instantly)
    const headerTitleElement = document.getElementById('typingText'); 

    // Messages for the browser's HEAD TAB title
    const headTabMessages = [
        "Aha! Scan chesava.. 🐾 ",
        "You're quiet curious, aren't you?✨",
        "ANND!! Your fav animal is here ❤️",
        "Edhoroju manam kuda thechukundham 🐶🐱",
        "Your LUV for 🐘",
        "Your mood booster is here 🌈",
        "Chudu nilane gudleskoni chusthundhi🫢",
        " Chadhivindhi chalu elephant chusi nidrapo💤",
        " Elephants don't play with skinny ppl, thinu sarriga🍅",
        "Elephant inka nuvvu Matching matching 👀",
        " Dhanni chusi nerchuko ela thinadam🌵",
        " Urikeee elephants kaadhu 40LPA kottu💸",
        " Emaindhe?? Elephant kavala?😶‍🌫️",
        " ☀️ Sun is plotting against you, drink more H-O-H"
    ];

    // Text to display instantly in the header-bubble h1 (can be randomized too if desired)
    const staticHeaderTexts = [
        "YOUR ANIMAL FOR THE TAP",
        "ELEPHANT ZONE",
        "GET YOUR DAILY DOSE",
        "TAP FOR A NEW VIEW",
        "HELLO ELEPHANT LOVER"
    ];

    // Function to set a random browser tab title
    function setRandomHeadTabTitle() {
        const randomIndex = Math.floor(Math.random() * headTabMessages.length);
        document.title = headTabMessages[randomIndex];
    }

    // Function to set a random text in the header-bubble h1
    function setRandomHeaderTitle() {
        const randomIndex = Math.floor(Math.random() * staticHeaderTexts.length);
        headerTitleElement.textContent = staticHeaderTexts[randomIndex];
    }
    
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

    // --- Curated List of Baby Animal Image URLs from Pexels ---
    const babyAnimalImages = [
        "https://images.pexels.com/photos/53125/elephant-tusk-ivory-animal-53125.jpeg",
        "https://images.pexels.com/photos/35693/elephant-big-nature-wildlife.jpg",
        "https://images.pexels.com/photos/1750820/pexels-photo-1750820.jpeg",
        "https://images.pexels.com/photos/3739325/pexels-photo-3739325.jpeg",
        "https://images.pexels.com/photos/3850526/pexels-photo-3850526.jpeg",
        "https://images.pexels.com/photos/3565117/pexels-photo-3565117.jpeg",
        "https://images.pexels.com/photos/3567847/pexels-photo-3567847.jpeg",
        "https://images.pexels.com/photos/4577791/pexels-photo-4577791.jpeg",
        "https://images.pexels.com/photos/3739343/pexels-photo-3739343.jpeg",
        "https://images.pexels.com/photos/6551925/pexels-photo-6551925.jpeg",
        "https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg",
        "https://images.pexels.com/photos/2409964/pexels-photo-2409964.jpeg",
        "https://images.pexels.com/photos/1907075/pexels-photo-1907075.jpeg",
        "https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg",
        "https://images.pexels.com/photos/4577507/pexels-photo-4577507.jpeg",
        "https://images.pexels.com/photos/6551938/pexels-photo-6551938.jpeg",
        "https://images.pexels.com/photos/5985284/pexels-photo-5985284.jpeg",
        "https://images.pexels.com/photos/2085307/pexels-photo-2085307.jpeg",
        "https://images.pexels.com/photos/4577523/pexels-photo-4577523.jpeg",
        "https://images.pexels.com/photos/3723862/pexels-photo-3723862.jpeg",
        "https://images.pexels.com/photos/6551946/pexels-photo-6551946.jpeg",
        "https://images.pexels.com/photos/3751675/pexels-photo-3751675.jpeg",
        "https://images.pexels.com/photos/6551922/pexels-photo-6551922.jpeg",
        "https://images.pexels.com/photos/3751673/pexels-photo-3751673.jpeg",
        "https://images.pexels.com/photos/3751676/pexels-photo-3751676.jpeg",
        "https://images.pexels.com/photos/20792101/pexels-photo-20792101.jpeg",
        "https://images.pexels.com/photos/11760837/pexels-photo-11760837.jpeg",
        "https://images.pexels.com/photos/29146649/pexels-photo-29146649.jpeg",
        "https://images.pexels.com/photos/4012567/pexels-photo-4012567.jpeg",
        "https://images.pexels.com/photos/4251352/pexels-photo-4251352.jpeg",
        "https://images.pexels.com/photos/14803682/pexels-photo-14803682.jpeg",
        "https://images.pexels.com/photos/14803688/pexels-photo-14803688.jpeg",
        "https://images.pexels.com/photos/31370275/pexels-photo-31370275.jpeg",
        "https://images.pexels.com/photos/4440408/pexels-photo-4440408.jpeg",
        "https://images.pexels.com/photos/16591264/pexels-photo-16591264.jpeg",
        "https://images.pexels.com/photos/4440409/pexels-photo-4440409.jpeg",
        "https://images.pexels.com/photos/18551094/pexels-photo-18551094.jpeg",
        "https://images.pexels.com/photos/31370274/pexels-photo-31370274.jpeg",
        "https://images.pexels.com/photos/30705691/pexels-photo-30705691.jpeg",
        "https://images.pexels.com/photos/4251350/pexels-photo-4251350.jpeg",
        "https://images.pexels.com/photos/13681260/pexels-photo-13681260.jpeg",
        "https://images.pexels.com/photos/31025743/pexels-photo-31025743.jpeg",
        "https://images.pexels.com/photos/4012569/pexels-photo-4012569.jpeg",
        "https://images.pexels.com/photos/16591311/pexels-photo-16591311.jpeg",
        "https://images.pexels.com/photos/2134246/pexels-photo-2134246.jpeg", 
        "https://images.pexels.com/photos/17213949/pexels-photo-17213949.jpeg",     
        "https://images.pexels.com/photos/28554641/pexels-photo-28554641.jpeg",   
        "https://images.pexels.com/photos/5125391/pexels-photo-5125391.jpeg",   
        "https://images.pexels.com/photos/10884443/pexels-photo-10884443.jpeg",  
        "https://images.pexels.com/photos/2134246/pexels-photo-2134246.jpeg",   
        "https://images.pexels.com/photos/1289845/pexels-photo-1289845.jpeg",    
        "https://images.pexels.com/photos/2677843/pexels-photo-2677843.jpeg",     
        "https://images.pexels.com/photos/65566/pexels-photo-65566.jpeg",      
        "https://images.pexels.com/photos/7001091/pexels-photo-7001091.jpeg",    
        "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg",   
        "https://images.pexels.com/photos/3691288/pexels-photo-3691288.jpeg",    
        "https://images.pexels.com/photos/32287290/pexels-photo-32287290.jpeg",   
        "https://images.pexels.com/photos/12284846/pexels-photo-12284846.jpeg"
    ];

    // --- Event Listener for Refresh Button ---
    refreshButton.addEventListener('click', () => {
        location.reload(); 
    });

    // Initial calls on page load
    setRandomHeadTabTitle(); // Sets the browser tab title
    setRandomHeaderTitle(); // Sets the text in the h1 on the page instantly
    displayRandomAnimal(); // Displays the first image
});
