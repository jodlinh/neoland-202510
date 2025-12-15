const homeView = createView()
hideView(homeView)

const homeTitle = createTitle()
setTextContent(homeTitle, 'MyPet')
setClass(homeTitle, 'font-bold text-xl')
addChild(homeView, homeTitle)

const homeSubTitle = createTitle2()
setTextContent(homeSubTitle, 'Welcome Home!')
addChild(homeView, homeSubTitle)


const homeTopPanel = createPanel()
setClass(homeTopPanel, 'flex justify-between')


const homeAddPetButton = createButton()
setClass(homeAddPetButton, 'self-end bg-black text-white px-2 font-bold')
setTextContent(homeAddPetButton, '+ Pet')
addChild(homeTopPanel, homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(homeView)
    showView(addPetView)

})

const homeLogoutButton = createButton()
setClass(homeLogoutButton, 'self-end bg-black text-white px-2 font-bold')
setTextContent(homeLogoutButton, 'Logout')
addChild(homeTopPanel, homeLogoutButton)

homeLogoutButton.addEventListener('click', function () {
    logic.logoutUser()
    hideView(homeView)
    showView(loginView)

    clearHomePetList()
})

const homePetList = createUnordenerList()
addChild(homeView, homePetList)

addChild(homeView, homeTopPanel)
addChild(document.body, homeView)


function refreshHomePetsList() {
    const pets = logic.getPets()

    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i]

        const item = createListItem()
        setClass(item, 'flex')
        const image = createImage()
        setSource(image, pet.image)
        setClass(image, 'rounded-[50%] w-20 h-20')
        addChild(item, image)

        const name = createParagraph()
        setTextContent(name, pet.name)
        addChild(item, name)

        addChild(homePetList, item)
    }

}

function clearHomePetList() {
    for (let i = homePetList.children.length - 1; i >= 0; i--) {
        const child = homePetList.children[i]

        removeChild(homePetList, child)
    }
}