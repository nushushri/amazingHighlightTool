let yellowButton = document.getElementById("yellowButton");
let blueButton = document.getElementById("blueButton");
let redButton = document.getElementById("redButton");

yellowButton.addEventListener("click", currentPageSelector);
redButton.addEventListener("click", currentPageSelector);
blueButton.addEventListener("click", currentPageSelector);

// referred to https://developer.chrome.com/docs/extensions/mv3/getstarted/#logic 
async function currentPageSelector() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: deleteSelection,
  });
}

function deleteSelection() {
  let selection = window.getSelection();
  selection.deleteFromDocument();
}
