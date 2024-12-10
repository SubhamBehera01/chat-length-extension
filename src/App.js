/* global chrome */

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [chatLength, setChatLength] = useState(null);

  // useEffect(() => {
  //   if (chrome && chrome.runtime) {
  //     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //       chrome.tabs.sendMessage(tabs[0].id, { action: 'getChatLength' }, (response) => {
  //         if (response && response.lengthInMeters) {
  //           setChatLength(response.lengthInMeters);
  //         } else {
  //           setChatLength('Error fetching data');
  //         }
  //       });
  //     });
  //   } else {
  //     console.error('Chrome API is not available');
  //   }
  // }, []);

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.id) {
      // Chrome API is available - run your extension-specific code here
      console.log("Chrome API is available");
  
      // Your code that uses the chrome API
    } else {
      console.log("Chrome API is not available");
      // Optional: handle what to do if the Chrome API isn't available
    }
  }, []);
  

  return (
    <div className="App">
      <h3>Chat Length Tracker</h3>
      <div>
        {chatLength ? (
          <div>Length: {chatLength} meters</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
