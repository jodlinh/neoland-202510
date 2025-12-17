const loginView = createView()
hideView(loginView)

const loginTitle = createTitle()
setTextContent(loginTitle, 'MyPet')
addChild(loginView, loginTitle)

const loginSubtitle = createTitle2()
setTextContent(loginSubtitle, 'Login')
addChild(loginView, loginSubtitle)


const loginForm = createForm()
setClass(loginForm, 'flex flex-col')


const loginUsernameLabel = createLabel()
setTextContent(loginUsernameLabel, 'Username')
setFor(loginUsernameLabel, 'username')
addChild(loginForm, loginUsernameLabel)
const loginUsernameInput = createInput()
setId(loginUsernameInput, 'username')
setType(loginUsernameInput, 'text')
setClass(loginUsernameInput, 'border')
addChild(loginForm, loginUsernameInput)


const loginPasswordLabel = createLabel()
setTextContent(loginPasswordLabel, 'Password')
setFor(loginPasswordLabel, 'password')
addChild(loginForm, loginPasswordLabel)
const loginPasswordInput = createInput()
setClass(loginPasswordInput, 'border')
setId(loginPasswordInput, 'password')
setType(loginPasswordInput, 'password')
addChild(loginForm, loginPasswordInput)


const loginShowButton = createButton()
setClass(loginShowButton, 'self-end bg-black text-white px-2 mb-2')
setTextContent(loginShowButton, 'Show')
addChild(loginForm, loginShowButton)

loginShowButton.addEventListener('click', function (event) {
    event.preventDefault()
    if (getType(loginPasswordInput) === 'password') {
        setType(loginPasswordInput, 'text')
        setTextContent(loginShowButton, 'Hide')
    } else {
        setType(loginPasswordInput, 'password')
        setTextContent(loginShowButton, 'Show')
    }
})


const loginSubmitButton = createButton()
setType(loginSubmitButton, 'submit')
setTextContent(loginSubmitButton, 'Login')
addChild(loginForm, loginSubmitButton)

addChild(loginView, loginForm)


loginForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const username = getValue(loginUsernameInput)
    const password = getValue(loginPasswordInput)

    try {
        logic.loginUser(username, password)

        setTextContent(loginFeedback, '')
        reset(loginForm)

        renderHomePetsList()

        hideView(loginView)
        showView(homeView)

    } catch (error) {
        setTextContent(loginFeedback, error.message)
    }
})

const loginFeedback = createParagraph()
addChild(loginView, loginFeedback)


const loginRegisterLink = createLink()
setTextContent(loginRegisterLink, 'Register')
addChild(loginView, loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()
    hideView(loginView)
    showView(registerView)

})

addChild(document.body, loginView)
