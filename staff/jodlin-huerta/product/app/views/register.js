const registerView = createView()
hideView(registerView)


const registerTitle = createTitle()
setTextContent(registerTitle, 'MyPet')
setClass(registerTitle, 'font-bold text-xl')
addChild(registerView, registerTitle)

const registerSubtitle = createTitle2()
setTextContent(registerSubtitle, 'Register')
setClass(registerSubtitle, 'font-bold')
addChild(registerView, registerSubtitle)


const registerForm = createForm()
setClass(registerForm, 'flex flex-col')

const registerNameLabel = createLabel()
setTextContent(registerNameLabel, 'Name')
setFor(registerNameLabel, 'name')
addChild(registerForm, registerNameLabel)

const registerNameInput = createInput()
setClass(registerNameInput, 'border')
setId(registerNameInput, 'name')
setType(registerNameInput, 'text')
addChild(registerForm, registerNameInput)

const registerEmailLabel = createLabel()
setTextContent(registerEmailLabel, 'Email')
setFor(registerEmailLabel, 'email')
addChild(registerForm, registerEmailLabel)

const registerEmailInput = createInput()
setClass(registerEmailInput, 'border')
setId(registerEmailInput, 'email')
setType(registerEmailInput, 'email')
addChild(registerForm, registerEmailInput)

const registerUsernameLabel = createLabel()
setTextContent(registerUsernameLabel, 'Username')
setFor(registerUsernameLabel, 'username')
addChild(registerForm, registerUsernameLabel)

const registerUsernameInput = createInput()
setClass(registerUsernameInput, 'border')
setId(registerUsernameInput, 'username')
setType(registerUsernameInput, 'text')
addChild(registerForm, registerUsernameInput)


const registerPasswordLabel = createLabel()
setTextContent(registerPasswordLabel, 'Password')
setFor(registerPasswordLabel, 'password')
addChild(registerForm, registerPasswordLabel)

const registerPasswordContainerDiv = createPanel()
setClass(registerPasswordContainerDiv, 'flex')

const registerPasswordInput = createInput()
setClass(registerPasswordInput, 'border')
setId(registerPasswordInput, 'password')
setType(registerPasswordInput, 'password')
addChild(registerPasswordContainerDiv, registerPasswordInput)

const registerShowPasswordButton = createButton()
setClass(registerShowPasswordButton, 'bg-black text-white px-2 ms-4')
setTextContent(registerShowPasswordButton, 'Show')
addChild(registerPasswordContainerDiv, registerShowPasswordButton)
addChild(registerForm, registerPasswordContainerDiv)


registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()
    if (getType(registerPasswordInput) === 'password') {
        setType(registerPasswordInput, 'text')
        setTextContent(registerShowPasswordButton, 'Hide')
    } else {
        setType(registerPasswordInput, 'password')
        setTextContent(registerShowPasswordButton, 'Show')

    }
})



const registerPasswordRepeatLabel = createLabel()
setTextContent(registerPasswordRepeatLabel, 'Repeat Password')
setFor(registerPasswordRepeatLabel, 'passwordRepeat')
addChild(registerForm, registerPasswordRepeatLabel)


const registerPasswordRepeatContainerDiv = document.createElement('div')

const registerPasswordRepeatInput = createInput()
setClass(registerPasswordRepeatInput, 'border')
setId(registerPasswordRepeatInput, 'passwordRepeat')
setType(registerPasswordRepeatInput, 'password')
addChild(registerPasswordRepeatContainerDiv, registerPasswordRepeatInput)

const registerShowPasswordRepeatButton = createButton()
setClass(registerShowPasswordRepeatButton, 'bg-black text-white px-2 ms-4')
setTextContent(registerShowPasswordRepeatButton, 'Show')
addChild(registerPasswordRepeatContainerDiv, registerShowPasswordRepeatButton)

addChild(registerForm, registerPasswordRepeatContainerDiv)

registerShowPasswordRepeatButton.addEventListener('click', function (event) {
    event.preventDefault()
    if (getType(registerPasswordRepeatInput) === 'password') {
        setType(registerPasswordRepeatInput, 'text')
        setTextContent(registerShowPasswordRepeatButton, 'Hide')
    } else {
        setType(registerPasswordRepeatInput, 'password')
        setTextContent(registerShowPasswordRepeatButton, 'Show')
    }
})



const registerSubmitButton = createButton()
setType(registerSubmitButton, 'submit')
setClass(registerSubmitButton, 'bg-black self-end text-white px-2 mt-4')
setTextContent(registerSubmitButton, 'Register')
addChild(registerForm, registerSubmitButton)
addChild(registerView, registerForm)


registerForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const name = getValue(registerNameInput)
    const email = getValue(registerEmailInput)
    const username = getValue(registerUsernameInput)
    const password = getValue(registerPasswordInput)
    const passwordRepeat = getValue(registerPasswordRepeatInput)

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)
        reset(registerForm)
        setTextContent(registerFeedback, '')

        hideView(registerView)
        showView(loginView)
    } catch (error) {
        setTextContent(registerFeedback, error.message)
    }

})

const registerLoginLink = createLink()
setClass(registerLoginLink, 'underline font-bold')
setTextContent(registerLoginLink, 'Login')
addChild(registerView, registerLoginLink)


registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()
    showView(loginView)
    hideView(registerView)

})

const registerFeedback = createParagraph()
addChild(registerView, registerFeedback)

addChild(document.body, registerView)
