const registerView = document.createElement('div')
registerView.style.display = 'none'


const registerTitle = document.createElement('h1')
registerTitle.textContent = 'MyPet'
registerTitle.className = 'font-bold text-xl'
registerView.appendChild(registerTitle)

const registerSubtitle = document.createElement('h2')
registerSubtitle.textContent = 'Register'
registerSubtitle.className = 'font-bold'
registerView.appendChild(registerSubtitle)


const registerForm = document.createElement('form')
registerForm.className = 'flex flex-col'

const registerNameLabel = document.createElement('label')
registerNameLabel.textContent = 'Name'
registerNameLabel.htmlFor = 'name'
registerForm.appendChild(registerNameLabel)
const registerNameInput = document.createElement('input')
registerNameInput.className = 'border'
registerNameInput.id = 'name'
registerNameInput.type = 'text'

registerForm.appendChild(registerNameInput)

const registerEmailLabel = document.createElement('label')
registerEmailLabel.textContent = 'Email'
registerEmailLabel.htmlFor = 'email'
registerForm.appendChild(registerEmailLabel)
const registerEmailInput = document.createElement('input')
registerEmailInput.className = 'border'
registerEmailInput.id = 'email'
registerEmailInput.type = 'email'
registerForm.appendChild(registerEmailInput)

const registerUsernameLabel = document.createElement('label')
registerUsernameLabel.textContent = 'Username'
registerUsernameLabel.htmlFor = 'username'
registerForm.appendChild(registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
registerUsernameInput.className = 'border'
registerUsernameInput.id = 'username'
registerUsernameInput.type = 'text'
registerForm.appendChild(registerUsernameInput)


const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.textContent = 'Password'
registerPasswordLabel.htmlFor = 'password'
registerForm.appendChild(registerPasswordLabel)

const registerPasswordContainerDiv = document.createElement('div')
registerPasswordContainerDiv.className = 'flex'

const registerPasswordInput = document.createElement('input')
registerPasswordInput.className = 'border'
registerPasswordInput.id = 'password'
registerPasswordInput.type = 'password'
registerPasswordContainerDiv.appendChild(registerPasswordInput)

const registerShowPasswordButton = document.createElement('button')
registerShowPasswordButton.className = 'bg-black text-white px-2 ms-4'
registerShowPasswordButton.textContent = 'Show'
registerPasswordContainerDiv.appendChild(registerShowPasswordButton)
registerForm.appendChild(registerPasswordContainerDiv)


registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()
    if (registerPasswordInput.type === 'password') {
        registerPasswordInput.type = 'text'
        registerShowPasswordButton.textContent = 'Hide'
    } else {
        registerPasswordInput.type = 'password'
        registerShowPasswordButton.textContent = 'Show'

    }
})



const registerPasswordRepeatLabel = document.createElement('label')
registerPasswordRepeatLabel.textContent = 'Repeat Password'
registerPasswordRepeatLabel.htmlFor = 'passwordRepeat'
registerForm.appendChild(registerPasswordRepeatLabel)


const registerPasswordRepeatContainerDiv = document.createElement('div')

const registerPasswordRepeatInput = document.createElement('input')
registerPasswordRepeatInput.className = 'border'
registerPasswordRepeatInput.id = 'passwordRepeat'
registerPasswordRepeatInput.type = 'password'
registerPasswordRepeatContainerDiv.appendChild(registerPasswordRepeatInput)

const registerShowPasswordRepeatButton = document.createElement('button')
registerShowPasswordRepeatButton.className = 'bg-black text-white px-2 ms-4'
registerShowPasswordRepeatButton.textContent = 'Show'
registerPasswordRepeatContainerDiv.appendChild(registerShowPasswordRepeatButton)

registerForm.appendChild(registerPasswordRepeatContainerDiv)

registerShowPasswordRepeatButton.addEventListener('click', function (event) {
    event.preventDefault()
    if (registerPasswordRepeatInput.type === 'password') {
        registerPasswordRepeatInput.type = 'text'
        registerShowPasswordRepeatButton.textContent = 'Hide'
    } else {
        registerPasswordRepeatInput.type = 'password'
        registerShowPasswordRepeatButton.textContent = 'Show'
    }
})



const registerSubmitButton = document.createElement('button')
registerSubmitButton.type = 'submit'
registerSubmitButton.className = 'bg-black self-end text-white px-2 mt-4'
registerSubmitButton.textContent = 'Register'
registerForm.appendChild(registerSubmitButton)
registerView.appendChild(registerForm)


registerForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const name = registerNameInput.value
    const email = registerEmailInput.value
    const username = registerUsernameInput.value
    const password = registerPasswordInput.value
    const passwordRepeat = registerPasswordRepeatInput.value

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)
        registerForm.reset()
        registerFeedback.textContent = ''

        registerView.style.display = 'none'
        loginView.style.display = ''
    } catch (error) {
        registerFeedback.textContent = error.message
    }

})

const registerLoginLink = document.createElement('a')
registerLoginLink.className = 'underline font-bold'
registerLoginLink.textContent = 'Login'
registerLoginLink.href = ''
registerView.appendChild(registerLoginLink)


registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()
    loginView.style.display = ''
    registerView.style.display = 'none'

})

const registerFeedback = document.createElement('p')
registerView.appendChild(registerFeedback)

document.body.appendChild(registerView)
