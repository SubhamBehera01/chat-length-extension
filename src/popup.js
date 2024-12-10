// popup.js

// Ensure the chrome API is available in the current environment
if (typeof chrome !== 'undefined') {
    // If chrome is available, proceed with sending the message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getChatLength' }, (response) => {
            if (response && response.lengthInMeters) {
                document.getElementById('result').textContent = response.lengthInMeters + " meters";
            } else {
                document.getElementById('result').textContent = "Error fetching data";
            }
        });
    });
} else {
    // Log an error if chrome API is not available
    console.error('Chrome API is not available');
}
