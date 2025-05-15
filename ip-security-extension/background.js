chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "check-ip",
      title: "Check Selected IP",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    const selectedText = info.selectionText;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: ipAlert,
      args: [selectedText]
    });
  });
  
  function ipAlert(ip) {
    alert("Checking selected IP: " + ip);
    // Advanced usage can be implemented here with background fetch.
  }
  