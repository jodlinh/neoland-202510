const landingView = createView()
showView(landingView)

const landingTitle = createTitle()
setTextContent(landingTitle, 'MyPet')
setClass(landingTitle, 'font-bold text-xl')
addChild(landingView, landingTitle)

const landingWelcome = createParagraph()
setTextContent(landingView, 'Welcome')
setClass(landingWelcome, 'font-bold')
addChild(landingView, landingWelcome)

const landingNavigation = createParagraph()
setClass(landingNavigation, 'mt-4')
const landingLoginLink = createLink()
setTextContent(landingLoginLink, 'Login')
setClass(landingLoginLink, 'underline font-bold ')

addChild(landingNavigation, landingLoginLink)

const landingOrText = document.createTextNode(' or ')
addChild(landingNavigation, landingOrText)

const landingRegisterLink = createLink()
setTextContent(landingRegisterLink, 'Register')
setClass(landingRegisterLink, 'underline  font-bold')
addChild(landingNavigation, landingRegisterLink)
addChild(landingView, landingNavigation)

landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()
    hideView(landingView)
    showView(loginView)

})

landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()
    hideView(landingView)
    showView(registerView)

})

addChild(document.body, landingView)