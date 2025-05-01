emailjs.init("6Cdzu9ZybjzZg1QX1");


  const phrases = ["WEB DESIGNER", "WEB DEVELOPER", "Full Stack Developer", "MOBILE APP DEVELOPER"];
  const textElement = document.getElementById("changing-text");
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[currentPhraseIndex];
    const displayedText = currentPhrase.substring(0, currentCharIndex);

    textElement.textContent = displayedText;

    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      currentCharIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && currentCharIndex > 0) {
      currentCharIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
      setTimeout(typeEffect, 1000);
    }
  }

  // Start typing effect on page load
  document.addEventListener("DOMContentLoaded", typeEffect);


  function handleContact (){
    document.getElementById('contact').scrollIntoView({
        behavior: "smooth"
    });
  }
//  Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener ('click', () => {
    navLinks.classList.toggle('show');
})


// Auto Responder

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_20w0cgj', 'template_209yezd', this)
    .then(function(response){
        console.log('success:', response);
        alert("Message sent Successfully! I will get back to You as soon as Possible.")
        document.getElementById('contact-form').reset();
    }, function(error){
        console.log('Error:', error);
        alert('Something went wrong, Please try again')
    });
});