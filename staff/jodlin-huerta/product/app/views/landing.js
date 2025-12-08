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