document.getElementById("portfolio-section-1").innerHTML = `
    <div class="portfolio">
        <div class="portfolio-content">
            <div class="text-container">
                <h2>FAHP Data Collection: Expert Opinion</h2>
                <p>The Analytic Hierarchy Process (AHP) is a structured decision-making method...</p>
            </div>
            <div class="button-container">
                <button onclick="window.location.href = 'https://form.jotform.com/233162325013442';">Participate in the Survey</button>
            </div>
        </div>
    </div>
`;
// Select the button
const toggleButton = document.getElementById('toggle-mode-btn');

// Add click event listener to toggle dark mode
toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    
    // Optionally update button text
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
