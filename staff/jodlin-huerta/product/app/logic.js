function Logic() { }

Logic.prototype.registerUser = function (
    name,
    email,
    username,
    password,
    passwordRepeat
) {
    // TODO rules
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



Logic.prototype.loginUser = function (username, password) {
    if (typeof username !== 'string') throw new Error('Invalid UserName type')
    if (username.length < 3) throw new Error('Invalid UserName length')

    if (typeof password !== 'string') throw new Error('Invalid Password type')

    let user = data.findUserByUsername(username)
    if (user === null) throw new Error('UserName not found')

    if (user.password !== password) throw new Error('wrong password')

    data.setLoggedInUserId(user.id)

}

Logic.prototype.logoutUser = function () {
    data.setLoggedInUserId(null)
}

Logic.prototype.addPet = function (name, birthdate, weight, image) {
    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 1) throw new Error('Invalid name length')
    /*
        if (typeof birthdate !== 'string') throw new Error('Invalid birthday type')
        if (birthdate(4) !== '-' || birthdate(7) !== '-') throw new Error('invalid birthday format')
    
    */
    //const isoDateRegex = new RegExp('^//d{4}-//d{2}-//d{2}$')
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!isoDateRegex.test(birthdate)) throw new Error('Invalid birthday format')


    if (typeof weight !== 'number' || isNaN(weight)) throw new Error('Invalid weight type')

    if (typeof image !== 'string') throw new Error('Invalid image type')

    const urlRegex = /(www|http:|https:)+[^\s]+[\w]/
    if (!urlRegex.test(image)) throw new Error('Invalid image format')

    const pet = new Pet('pet-' + data.petsCount, data.loggedInUserId, name, birthdate, weight, image)

    data.insertPet(pet)

}



const logic = new Logic();
