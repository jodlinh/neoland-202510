class Logic {
    constructor() {

    }

    registerUser(
        name,
        email,
        username,
        password,
        passwordRepeat
    ) {

        if (typeof name !== "string") throw new Error("invalid name type");
        if (name.length < 1) throw new Error("invalid name length");

        if (typeof email !== "string") throw new Error("invalid email type");
        if (email.length < 1) throw new Error("invalid email length");

        if (typeof username !== "string") throw new Error("invalid username type");
        if (username.length < 1) throw new Error("invalid username length");

        if (typeof password !== "string") throw new Error("invalid password type");
        if (password.length < 8) throw new Error("invalid password length");

        if (typeof passwordRepeat !== "string") throw new Error("invalid passwordRepeat type");
        if (passwordRepeat.length < 8) throw new Error("invalid passwordRepeat length");

        if (password !== passwordRepeat) throw new Error("password do no match")

        let user = data.findUserByEmail(email)
        if (user !== null) throw new Error("User email already exists")

        user = data.findUserByUsername(username)
        if (user !== null) throw new Error('username already exists')

        user = new User('user-' + data.usersCount, name, email, username, password, 'regular')
        data.insertUser(user)
    };



    loginUser(username, password) {
        if (typeof username !== 'string') throw new Error('Invalid UserName type')
        if (username.length < 3) throw new Error('Invalid UserName length')

        if (typeof password !== 'string') throw new Error('Invalid Password type')

        let user = data.findUserByUsername(username)
        if (user === null) throw new Error('UserName not found')

        if (user.password !== password) throw new Error('wrong password')

        data.setLoggedInUserId(user.id)

    }

    logoutUser() {
        data.setLoggedInUserId(null)
    }

    addPet(name, birthdate, weight, image) {
        const userId = data.getLoggedUserId()
        if (data.findUserByUserId(userId) === null) throw new Error('user not exist')
        if (userId === null) throw new Error('user not logged in')



        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('Invalid name length')

        const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!isoDateRegex.test(birthdate)) throw new Error('Invalid birthday format')


        if (typeof weight !== 'number' || isNaN(weight)) throw new Error('Invalid weight type')

        if (typeof image !== 'string') throw new Error('Invalid image type')

        const urlRegex = /(www|http:|https:)+[^\s]+[\w]/
        if (!urlRegex.test(image)) throw new Error('Invalid image format')

        const pet = new Pet('pet-' + data.petsCount, data.getLoggedUserId(), name, birthdate, weight, image)

        data.insertPet(pet)

    }


    getPets() {
        const userId = data.getLoggedUserId()
        if (userId === null) throw new Error('user not logged in')
        if (data.findUserByUserId(userId) === null) throw new Error('user not exist')

        const pets = data.findPetsByUserId(userId)

        return pets

    }

    deletePet(petId) {
        const userId = data.getLoggedUserId()
        if (data.findUserByUserId(userId) === null) throw new Error('user not exist')
        if (userId === null) throw new Error('user not logged in')

        if (typeof petId !== 'string') throw new Error('invalid pet-id type')

        const petIdRegex = /^\pet-[0-9]+$/
        if (!petIdRegex.test(petId)) throw new Error('invalid pet-id format')

        const pet = data.findPetsById(petId)
        if (pet === null) throw new Error('pet not found')

        if (pet.userId !== data.getLoggedUserId()) throw new Error('user not owner of pet')

        const petIndex = data.pets.indexOf(pet)
        data.pets.splice(petIndex, 1)




    }
}


const logic = new Logic();
