let clickCount = 0;
const shareLimit = 5;

function shareOnWhatsApp() {
  if (clickCount < shareLimit) {
    const message = "Hey Buddy, Join Tech For Girls Community!";
    const url = https://wa.me/?text=${encodeURIComponent(message)};
    window.open(url, '_blank');

    clickCount++;
    document.getElementById("clickCounter").innerText = Click count: ${clickCount}/5;

    if (clickCount === 5) {
      alert("Sharing complete. Please continue.");
    }
  } else {
    alert("Already shared 5 times.");
  }
}

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (clickCount < shareLimit) {
    alert("Please complete 5 WhatsApp shares before submitting.");
    return;
  }

  document.getElementById("message").innerText = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
  document.getElementById("registrationForm").querySelectorAll("input, button").forEach(el => el.disabled = true);

  // Optional: send to Google Sheets (explained in next step)
});