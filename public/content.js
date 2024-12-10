// content.js
    // content.js
console.log("Content script loaded");

function measureChatLength() {
    let chatContainer = document.querySelector('[aria-label="Chat"]'); // WhatsApp Web chat container selector
    if (!chatContainer) {
        console.log("Chat container not found");
        return;
    }

    // Get total height of the chat container
    let totalHeight = chatContainer.scrollHeight;

    // Convert pixels to meters (1 meter = 39.37 inches, 1 inch = 96 pixels)
    let totalInches = totalHeight / 96;
    let totalMeters = totalInches / 39.37;

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'getChatLength') {
            sendResponse({ lengthInMeters: totalMeters.toFixed(2) });
        }
    });
}

measureChatLength();
