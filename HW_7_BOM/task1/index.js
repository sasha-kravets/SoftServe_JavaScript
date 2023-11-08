const btn = document.getElementById('btn');

// For now, without an asynchronous function :)
const handleNewWindow = () => {
  // Create a new window 300x300
  const newWindow = window.open('', '', 'width=300, height=300');

  setTimeout(function () {
    // Resize the window to 500x500 after 2 seconds
    newWindow.resizeTo(500, 500);

    setTimeout(function () {
      // Move the window to coordinates (200, 200) after another 2 seconds
      newWindow.moveTo(200, 200);

      setTimeout(function () {
        // Close the window after an additional 2 seconds
        newWindow.close();
      }, 2000);
    }, 2000);
  }, 2000);
}

btn.addEventListener('click', handleNewWindow);