document.getElementById('captureButton').addEventListener('click', () => {
  chrome.tabs.captureVisibleTab(null, { format: "png" }, (screenshotUrl) => {
    if (chrome.runtime.lastError) {
      document.getElementById('message').innerText = "Erreur: " + chrome.runtime.lastError.message;
    } else {
      const link = document.createElement('a');
      link.href = screenshotUrl;
      link.download = 'screen.png';
      link.click();
      document.getElementById('message').innerText = "Capture enregistrée!";
    }
  });
});