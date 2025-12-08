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