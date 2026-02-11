
//manager

class Data {
    constructor() {
        this.loggedInUserId = null
    }

    setLoggedInUserId(userId) {
        this.loggedInUserId = userId
    }

    getLoggedUserId() {
        return this.loggedInUserId
    }
}

export const data = new Data()

