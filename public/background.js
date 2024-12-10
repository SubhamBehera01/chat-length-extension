// background.js

// Listen for the extension's installation and activate any setup if needed
chrome.runtime.onInstalled.addListener(() => {
    console.log("Chat Length Tracker Extension Installed");
});

// Example of injecting content.js when a specific page is loaded
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('your-chat-domain.com')) {
        // Adjust 'your-chat-domain.com' to match the chat application domain where you want to measure chat length
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["content.js"]
        });
    }
});

// Optional: Listen for messages if you want communication between popup, background, and content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "getChatLength") {
        // Handle chat length measurement here if needed
        console.log("Message received in background script");
    }
});
