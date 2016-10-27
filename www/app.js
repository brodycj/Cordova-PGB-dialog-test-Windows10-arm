function showNativeAlert() {
  navigator.notification.alert('Native alert message');
}

function goToPage2() {
  window.location = "page2.html";
}

document.addEventListener('deviceready', function() {
  $('#show-alert').click(showNativeAlert);
  $('#location-page2').click(goToPage2);
});
