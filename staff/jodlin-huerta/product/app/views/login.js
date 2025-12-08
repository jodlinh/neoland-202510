const loginView = document.createElement('div')
loginView.style.display = 'none'

const loginTitle = document.createElement('h1')
loginTitle.textContent = 'MyPet'
loginTitle.className = 'font-bold text-xl'
loginView.appendChild(loginTitle)

const loginSubtitle = document.createElement('h2')
loginSubtitle.textContent = 'Login'
loginSubtitle.className = 'font-bold'
loginView.appendChild(loginSubtitle)


const loginForm = document.createElement('form')
loginForm.className = 'flex flex-col'


const loginUsernameLabel = document.createElement('label')
loginUsernameLabel.textContent = 'Username'
loginUsernameLabel.htmlFor = 'username'
loginForm.appendChild(loginUsernameLabel)
const loginUsernameInput = document.createElement('input')
loginUsernameInput.id = 'username'
loginUsernameInput.type = 'text'
loginUsernameInput.className = 'border'
loginForm.appendChild(loginUsernameInput)


const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.textContent = 'Password'
loginPasswordLabel.htmlFor = 'password'
loginForm.appendChild(loginPasswordLabel)
const loginPasswordInput = document.createElement('input')
loginPasswordInput.className = 'border'
loginPasswordInput.id = 'password'
loginPasswordInput.type = 'password'
loginForm.appendChild(loginPasswordInput)


const loginShowButton = document.createElement('button')
loginShowButton.className = 'self-end bg-black text-white px-2'
loginShowButton.textContent = 'Show'
loginForm.appendChild(loginShowButton)

loginShowButton.addEventListener('click', function (event) {
    event.preventDefault()
    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text'
        loginShowButton.textContent = 'Hide'
    } else {
        loginPasswordInput.type = 'password'
        loginShowButton.textContent = 'Show'
    }
})


const loginSubmitButton = document.createElement('button')
loginSubmitButton.type = 'submit'
loginSubmitButton.textContent = 'Login'
loginSubmitButton.className = 'bg-black text-white px-1 self-center'
loginForm.appendChild(loginSubmitButton)


loginView.appendChild(loginForm)


loginForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const username = loginUsernameInput.value
    const password = loginPasswordInput.value

    try {
        logic.loginUser(username, password)
        loginView.style.display = 'none'
        homeView.style.display = ''
        loginFeedback.textContent = ''
        loginForm.reset
    } catch (error) {
        loginFeedback.textContent = error.message
    }
})

const loginFeedback = document.createElement('p')
loginView.appendChild(loginFeedback)


const loginRegisterLink = document.createElement('a')
loginRegisterLink.textContent = 'Register'
loginRegisterLink.className = 'underline font-bold'
loginRegisterLink.href = ''
loginView.appendChild(loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()
    loginView.style.display = 'none'
    registerView.style.display = ''

})

document.body.appendChild(loginView)
