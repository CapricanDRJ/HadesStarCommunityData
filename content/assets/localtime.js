// /assets/localtime.js
document.addEventListener("DOMContentLoaded", function() {
  const updateDateElements = document.querySelectorAll('.last-updated-date');
  
  updateDateElements.forEach(element => {
    const unixTime = element.getAttribute('data-unix-time');
    if (unixTime) {
      const date = new Date(unixTime * 1000);
      element.textContent = date.toLocaleString();
    }
  });
});
