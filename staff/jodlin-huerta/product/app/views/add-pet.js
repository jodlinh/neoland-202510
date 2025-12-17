const addPetView = createView()
hideView(addPetView)

const addPetTitle = createTitle()
setTextContent(addPetTitle, 'MyPet')
addChild(addPetView, addPetTitle)

const addPetTopPanel = createPanel()
setClass(addPetTopPanel, 'flex justify-between')

const addPetSubtitle = createTitle2()
setTextContent(addPetSubtitle, 'Add Pet!')
addChild(addPetTopPanel, addPetSubtitle)

const addPetBackLink = createLink()
setTextContent(addPetBackLink, '< Back')
addChild(addPetTopPanel, addPetBackLink)
addChild(addPetView, addPetTopPanel)

addPetBackLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(addPetView)
    showView(homeView)
})


const addPetForm = createForm()
setClass(addPetForm, 'flex flex-col')

const addPetNameLabel = createLabel()
setTextContent(addPetNameLabel, 'Name')
setFor(addPetNameLabel, 'name')
addChild(addPetForm, addPetNameLabel)

const addPetNameInput = createInput()
setClass(addPetNameInput, 'border')
setId(addPetNameInput, 'name')
setType(addPetNameInput, 'text')
addChild(addPetForm, addPetNameInput)

const addPetBirthdayLabel = createLabel()
setTextContent(addPetBirthdayLabel, 'Day of Birth')
setFor(addPetBirthdayLabel, 'birthday')
addChild(addPetForm, addPetBirthdayLabel)

const addPetBirthdayInput = createInput()
setClass(addPetBirthdayInput, 'border')
setId(addPetBirthdayInput, 'birthday')
setType(addPetBirthdayInput, 'date')
addChild(addPetForm, addPetBirthdayInput)

const addPetWeightLabel = createLabel()
setTextContent(addPetWeightLabel, 'Weight')
setFor(addPetWeightLabel, 'weight')
addChild(addPetForm, addPetWeightLabel)

const addPetWeightInput = createInput()
setClass(addPetWeightInput, 'border')
setId(addPetWeightInput, 'weight')
setType(addPetWeightInput, 'number')
setStep(addPetWeightInput, '0.01')
addChild(addPetForm, addPetWeightInput)


const addPetImageLabel = createLabel()
setTextContent(addPetImageLabel, 'Image')
setFor(addPetImageLabel, 'image')
addChild(addPetForm, addPetImageLabel)

const addPetImageInput = createInput()
setClass(addPetImageInput, 'border')
setId(addPetImageInput, 'image')
setType(addPetImageInput, 'url')
addChild(addPetForm, addPetImageInput)


const addPetSubmitButton = createButton()
setType(addPetSubmitButton, 'submit')
//setClass(addPetSubmitButton, 'bg-black self-center text-white px-2 mt-4')
setTextContent(addPetSubmitButton, 'Add Pet')
addChild(addPetForm, addPetSubmitButton)
addChild(addPetView, addPetForm)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = getValue(addPetNameInput)
    const birthday = getValue(addPetBirthdayInput)
    const weight = parseFloat(getValue(addPetWeightInput))
    const image = getValue(addPetImageInput)

    try {
        logic.addPet(name, birthday, weight, image)
        reset(addPetForm)
        setTextContent(addPetFeedback, '')

        clearHomePetList()

        renderHomePetsList()

        hideView(addPetView)
        showView(homeView)

    } catch (error) {
        setTextContent(addPetFeedback, error.message)
    }

})

const addPetFeedback = createParagraph()
addChild(addPetView, addPetFeedback)


addChild(document.body, addPetView)