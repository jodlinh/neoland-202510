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
        return null
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

    updatePet(petId, name, birthdate, weight, image) {
        for (let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i]
            if (pet.id === petId) {
                pet.name = name
                pet.birthday = birthdate
                pet.weight = weight
                pet.image = image

                return pet
            }
        }
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


    changePasswordUser(userId, newPassword) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]
            if (user.id === userId)
                user.password = newPassword
        }
    }

    changeEmailUser(userId, newEmail) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]
            if (user.id === userId)
                user.email = newEmail
        }
    }
}

const data = new Data()

module.exports = {
    User,
    Pet,
    data
}

