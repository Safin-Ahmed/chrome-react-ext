chrome.action.onClicked.addListener(function (tab) {
  // Sends a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { clicked: true });
  });
});
