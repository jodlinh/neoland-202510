//TODO implement landing view width (on top), welcome, and linsk for login and register


//body
document.body.className = 'p-4 h-screen'

//landing

const landingView = document.createElement('div')
landingView.style.display = ''

const landingTitle = document.createElement('h1')
landingTitle.textContent = 'MyPet'
landingTitle.className = 'font-bold text-xl'
landingView.appendChild(landingTitle)

const landingWelcome = document.createElement('p')
landingWelcome.textContent = 'Welcome!'
landingWelcome.className = 'font-bold'
landingView.appendChild(landingWelcome)

const landingAccess = document.createElement('p')
landingAccess.className = 'mt-4'
const landingLoginLink = document.createElement('a')
landingLoginLink.textContent = 'Login'
landingLoginLink.className = 'underline font-bold '
landingLoginLink.href = ''
landingAccess.appendChild(landingLoginLink)

const landingOrText = document.createTextNode(' or ')
landingAccess.appendChild(landingOrText)

const landingRegisterLink = document.createElement('a')
landingRegisterLink.textContent = 'Register'
landingRegisterLink.className = 'underline  font-bold'
landingRegisterLink.href = ""
landingAccess.appendChild(landingRegisterLink)
landingView.appendChild(landingAccess)

landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()
    landingView.style.display = 'none'
    loginView.style.display = ''

})

landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()
    landingView.style.display = 'none'
    registerView.style.display = ''

})


document.body.appendChild(landingView)



//register

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


//login


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


//Home

const homeView = document.createElement('div')
homeView.style.display = 'none'

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeTitle.className = 'font-bold text-xl'
homeView.appendChild(homeTitle)

const homeSubTitle = document.createElement('h2')
homeSubTitle.textContent = 'Welcome Home!'
homeView.appendChild(homeSubTitle)


const homeTopPanel = document.createElement('div')
homeTopPanel.className = 'flex justify-between'


const homeAddPetButton = document.createElement('button')
homeAddPetButton.className = 'self-end bg-black text-white px-2 font-bold'
homeAddPetButton.textContent = '+ Pet'
homeTopPanel.appendChild(homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    addPetView.style.display = ''

})

const homeLogoutButton = document.createElement('button')
homeLogoutButton.className = 'self-end bg-black text-white px-2 font-bold'
homeLogoutButton.textContent = 'Logout'
homeTopPanel.appendChild(homeLogoutButton)

homeLogoutButton.addEventListener('click', function () {
    logic.logoutUser()
    homeView.style.display = 'none'
    loginView.style.display = ''
})


homeView.appendChild(homeTopPanel)
document.body.appendChild(homeView)


// Add Pet

const addPetView = document.createElement('div')
addPetView.style.display = 'none'

const addPetTitle = document.createElement('h1')
addPetTitle.textContent = 'MyPet'
addPetTitle.className = 'font-bold text-xl'
addPetView.appendChild(addPetTitle)



const addPetTopPanel = document.createElement('div')
addPetTopPanel.className = 'flex justify-between'

const addPetSubtitle = document.createElement('h2')
addPetSubtitle.textContent = 'Add Pet!'
addPetSubtitle.className = 'font-bold'
addPetTopPanel.appendChild(addPetSubtitle)

const addPetBackLink = document.createElement('a')
addPetBackLink.textContent = '< Back'
addPetBackLink.href = ''
addPetBackLink.className = 'underline font-bold'
addPetTopPanel.appendChild(addPetBackLink)
addPetView.appendChild(addPetTopPanel)


const addPetForm = document.createElement('form')
addPetForm.className = 'flex flex-col'

const addPetNameLabel = document.createElement('label')
addPetNameLabel.textContent = 'Name'
addPetNameLabel.htmlFor = 'name'
addPetForm.appendChild(addPetNameLabel)
const addPetNameInput = document.createElement('input')
addPetNameInput.className = 'border'
addPetNameInput.id = 'name'
addPetNameInput.type = 'text'
addPetForm.appendChild(addPetNameInput)

const addPetBirthdayLabel = document.createElement('label')
addPetBirthdayLabel.textContent = 'Day of Birth'
addPetBirthdayLabel.htmlFor = 'birthday'
addPetForm.appendChild(addPetBirthdayLabel)
const addPetBirthdayInput = document.createElement('input')
addPetBirthdayInput.className = 'border'
addPetBirthdayInput.id = 'birthday'
addPetBirthdayInput.type = 'date'
addPetForm.appendChild(addPetBirthdayInput)

const addPetWeightLabel = document.createElement('label')
addPetWeightLabel.textContent = 'Weight'
addPetWeightLabel.htmlFor = 'weight'
addPetForm.appendChild(addPetWeightLabel)
const addPetWeightInput = document.createElement('input')
addPetWeightInput.className = 'border'
addPetWeightInput.id = 'weight'
addPetWeightInput.type = 'text'
addPetForm.appendChild(addPetWeightInput)


const addPetImageLabel = document.createElement('label')
addPetImageLabel.textContent = 'Image'
addPetImageLabel.htmlFor = 'image'
addPetForm.appendChild(addPetImageLabel)
const addPetImageInput = document.createElement('input')
addPetImageInput.className = 'border'
addPetImageInput.id = 'image'
addPetImageInput.type = 'url'
addPetForm.appendChild(addPetImageInput)


const addPetSubmitButton = document.createElement('button')
addPetSubmitButton.type = 'submit'
addPetSubmitButton.className = 'bg-black self-center text-white px-2 mt-4'
addPetSubmitButton.textContent = 'Add Pet'
addPetForm.appendChild(addPetSubmitButton)
addPetView.appendChild(addPetForm)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = addPetNameInput.value
    const birthday = addPetBirthdayInput.value
    const weight = addPetWeightInput.value
    const image = addPetImageInput.value

    console.log(name, birthday, weight, image)

})


document.body.appendChild(addPetView)