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
addPetWeightInput.type = 'number'
addPetWeightInput.step = '0.01'
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
    const weight = parseFloat(addPetWeightInput.value)
    const image = addPetImageInput.value

    try {
        logic.addPet(name, birthday, weight, image)
        addPetForm.reset()
        addPetFeedback.textContent = ''
        addPetView.style.display = 'none'
        homeView.style.display = ''

    } catch (error) {
        addPetFeedback.textContent = error.message
    }

})

const addPetFeedback = document.createElement('p')
addPetView.appendChild(addPetFeedback)


document.body.appendChild(addPetView)