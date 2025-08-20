document.addEventListener('DOMContentLoaded', () => {
  const openPopupBtn = document.getElementById('openPopup');
  const closePopupBtn = document.getElementById('closePopup');
  const popupOverlay = document.getElementById('popupOverlay');

  openPopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex'; // Show the popup
  });

  closePopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none'; // Hide the popup
  });

  // Close popup if clicked outside the popup-box
  popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  });
});