const commandLine = document.getElementById('command-line');
const terminalOutput = document.getElementById('terminal-output');

// Define your sections/tabs (Home, About, Projects, Contact)
const tabs = ['Home', 'About', 'Projects', 'Contact'];

// Define content for each tab
const tabContent = {
    Home: "Welcome to Tej's portfolio! Use 'cd' to navigate through sections. Type 'help' for more commands.",
    About: "Tej is a passionate developer with a keen interest in technology and open-source. Currently exploring new technologies and building cool projects.",
    Projects: "Projects:<br>1. Drone Project - Sina H10i<br>2. Portfolio Website<br>3. Open-source contributions.",
    Contact: "You can reach out to Tej via email: discovertej@example.com or connect on social media."
};

// Initially, set the current tab to 'Home'
let currentTab = 'Home';

// Command logic
const commands = {
    help: "Available commands: cd <directory>, pwd, ls, clear",
    pwd: () => `Current directory: /${currentTab}`,
    ls: () => `Available directories: ${tabs.join(', ')}`,
    clear: () => terminalOutput.innerHTML = '' // Clear the terminal output
};

// Handle the 'cd' command separately to change the current tab and update content
function changeDirectory(tab) {
    if (tabs.includes(tab)) {
        currentTab = tab;
        return `Changed directory to /${tab}<br>${tabContent[tab]}`;
    } else {
        return `Directory not found: ${tab}`;
    }
}

// Event listener to handle command input
commandLine.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const input = commandLine.value.trim();
        let output = '';

        // Split input for commands with arguments (like 'cd about')
        const inputParts = input.split(' ');
        const command = inputParts[0].toLowerCase();
        const argument = inputParts[1] ? inputParts[1] : '';

        // Handle the command input
        if (command === 'cd') {
            output = changeDirectory(argument);
        } else if (commands[command]) {
            output = typeof commands[command] === 'function' ? commands[command]() : commands[command];
        } else {
            output = `Command not found: ${input}. Type 'help' for a list of commands.`;
        }

        // Output the result
        terminalOutput.innerHTML += `<div>$ ${input}</div><div>${output}</div>`;

        // Clear the input field
        commandLine.value = '';

        // Scroll the terminal to the bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    
