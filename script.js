<script>

function switchLanguage() {

  const button = document.querySelector('.language-switcher');

  const currentLanguage = button.textContent;


  document.querySelectorAll('[data-fr]').forEach(element => {

    if (currentLanguage === "EN") {

      element.textContent = element.getAttribute("data-en");

    } else {

      element.textContent = element.getAttribute("data-fr");

    }

  });


  button.textContent = currentLanguage === "EN" ? "FR" : "EN";


  document.documentElement.lang =
    currentLanguage === "EN" ? "en" : "fr";

}

</script>
