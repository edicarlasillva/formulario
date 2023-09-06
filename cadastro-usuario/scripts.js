// Capturando os elementos
const form = document.getElementById("form")

const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value
  const emailValue = email.value
  const passwordValue = password.value
  const passwordConfirmationValue = passwordConfirmation.value

  if (usernameValue === '') {
    setError(username, "Nome de usuário obrigatório.")
  } else {
    setSuccess(username)
  }

  if (emailValue === '') {
    setError(email, "E-mail é obrigatório.")
  } else {
    setSuccess(email)
  }

  if (passwordValue === '') {
    setError(password, "Senha é obrigatória.")
  } else if (passwordValue.length < 7) {
    setError(password, "A senha precisa ter no mínimo 7 caracters.")
  } else {
    setSuccess(password)
  }

  if (passwordConfirmationValue === '') {
    setError(passwordConfirmation, "Confirmação de senha é obrigatória.")
  } else if (passwordConfirmationValue !== passwordValue) {
    setError(passwordConfirmation, "As senhas não são iguais.")
  } else {
    setSuccess(passwordConfirmation)
  }

  const formControls = form.querySelectorAll(".form-control")

  console.log(formControls)

  let formIsValid = true

  formControls.forEach((formControl) => {
    if (formControl.className !== "form-control success") {
      formIsValid = false
      return
    }
  })

  if (formIsValid) {
    console.log("Formulário validado!")
  }

  console.log(formIsValid)
}

function setError(input, message) {
  // recupera o elemento pai
  const formControl = input.parentElement

  // captura o elemento small (mensagem de erro)
  const small = formControl.querySelector("small")

  // Adiciona a mensagem de erro
  small.innerText = message

  // Adiciona a classe error no form-control
  formControl.classList.add("error")
}

function setSuccess(input) {
  const formControl = input.parentElement

  formControl.classList.add("success")
}