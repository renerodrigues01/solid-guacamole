const form = document.getElementById("loginForm");

const statusResult = document.getElementById("")

async function handleSubmit(event) {
  event.preventDefault();
  console.log("submitted !")
  const data = new FormData(event.target);

  const encodedData = JSON.stringify(data);

  fetch(form.action, {
    method: "POST",
    body: encodedData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      statusResult.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          statusResult.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          statusResult.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    statusResult.innerHTML = "Oops! There was a problem submitting your form"
  });
}

form.addEventListener("submit", handleSubmit)