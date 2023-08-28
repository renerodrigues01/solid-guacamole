console.log("js loaded")

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

function validate(input) {
  const parent = input.parentElement

  if (input.value == '') {
    parent.classList.remove('has-error')
    return
  }

  //Try to validate the input
  if (input.type == 'email') {
    if (!validateEmail(input.value)) {
      // Select the input parent div and add the invalid class
      parent.classList.add('has-error')
      return
    } else {
      const parent = input.parentElement
      parent.classList.remove('has-error')
      return
    }
  }
}

const inputs = document.querySelectorAll('input')


inputs.forEach(function (input) {
  input.addEventListener('input', function () {
    input.classList.add('has-value')
  })

  input.addEventListener('blur', function () {
    if (!input.value) {
      input.classList.remove('has-value')
      input.parentElement.classList.remove('has-error')


      input.placeholder = ''

    } else {
      validate(input)
    }
  })

  input.addEventListener('focus', function () {
    input.classList.add('has-value')

    validate(input)

    if (input.parentElement.classList.contains('has-error')) {
      input.parentElement.classList.remove('has-error')
    }

    if (input.value == '' && input.type == 'email') {
      input.placeholder = 'Inserisci'
    }

    if (input.value == '' && input.type == 'password') {
      input.placeholder = 'Inserisci la password'
    }

  })

  input.addEventListener('change', function () {
    input.classList.add('has-value')

    validate(input)
  })
})

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

