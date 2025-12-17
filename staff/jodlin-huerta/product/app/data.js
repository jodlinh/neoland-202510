//model

class User {
    constructor(id, name, email, username, password, role) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.password = password
        this.role = role
    }
}

class Pet {
    constructor(id, userId, /*chip,*/ name, /*gender,*/ birthday, weight, /* specie, race, colors, */ image) {
        this.id = id
        this.userId = userId
        // this.chip = chip
        this.name = name
        //  this.gender = gender
        this.birthday = birthday
        this.weight = weight
        // this.specie = specie
        // this.race = race
        // this.colors = colors
        this.image = image
    }
}


//manager

class Data {
    constructor() {
        this.users = []
        this.usersCount = 0
        this.pets = []
        this.petsCount = 0
        this.loggedInUserId = null
    }

    insertUser(user) {
        this.users.push(user)
        this.usersCount++
    }

    findUserByEmail(email) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]

            if (user.email === email) return user
        }
        return null
    }

    findUserByUsername(username) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]

            if (user.username === username) return user
        }
        return null
    }

    findUserByUserId(userId) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]
            if (user.id === userId) return user
        }
    }

    setLoggedInUserId(userId) {
        this.loggedInUserId = userId
    }

    getLoggedUserId() {
        return this.loggedInUserId
    }

    insertPet(pet) {
        this.pets.push(pet)
        this.petsCount++
    }

    findPetsByUserId(userId) {
        const foundPets = []
        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]
            if (pet.userId === userId)
                foundPets.push(pet)
        }
        return foundPets
    }

    findPetsById(petId) {
        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]
            if (pet.id === petId)
                return pet
        }
        return null
    }
}

const data = new Data()

