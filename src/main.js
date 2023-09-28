
document.addEventListener('DOMContentLoaded', function() {
  const redirectButton = document.getElementById('redirect');

  // Add a click event listener to the button
  redirectButton.addEventListener('click', function() {
      // Redirect to the desired page (replace 'destination-page.html' with your actual URL)
      window.location.href = 'google.com';
  });
});
