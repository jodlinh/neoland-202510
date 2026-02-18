// import express from 'express'
const express = require('express')
const cors = require('cors')

const { logic } = require('./logic')

const api = express()

const jsonBodyParser = express.json()

api.use(cors())

api.get('/', (req, res) => { res.send('Hello from API ;)') })


api.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        const userId = logic.authenticateUser(username, password)

        res.json(userId)

    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, email, username, password, passwordRepeat } = req.body

        logic.registerUser(name, email, username, password, passwordRepeat)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.get('/users/me', (req, res) => {
    try {

        const userId = req.headers.authorization.slice(6)

        const user = logic.getUser(userId)
       

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })

    }

})

api.patch('/users/email', jsonBodyParser, (req, res) => {
    try {
        const { currentEmail, newEmail, newEmailRepeat } = req.body

        const userId = req.headers.authorization.slice(6)

        logic.updateUserEmail(userId, currentEmail, newEmail, newEmailRepeat)

        res.status(204).send()

    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})


api.patch('/users/name', jsonBodyParser, (req, res) => {
    try {
        const { newName } = req.body

        const userId = req.headers.authorization.slice(6)

        logic.updateNameFromUser(userId, newName)

        res.status(204).send()

    } catch (error) {
        res.status(400).json({ error: error.constructor.error, message: error.message })
    }
})

api.patch('/users/password', jsonBodyParser, (req, res) => {
    try {
        const { currentPassword, newPassword, newPasswordRepeat } = req.body

        const userId = req.headers.authorization.slice(6)

        logic.updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat)

        res.status(204).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }

})


api.post('/pets', jsonBodyParser, (req, res) => {

    try {

        const userId = req.headers.authorization.slice(6)

        const { name, birthdate, weight, image } = req.body

        logic.addPet(userId, name, birthdate, weight, image)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })

    }
})

api.get('/pets', (req, res) => {
    try {

        const userId = req.headers.authorization.slice(6)

        const pets = logic.getPets(userId)

        res.status(200).json(pets)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })

    }
})

api.get('/pets/:petId', (req, res) => {
    try {

        const userId = req.headers.authorization.slice(6)

        const { petId } = req.params

        const pet = logic.getPetById(userId, petId)

        res.status(200).json(pet)   //status es por defecto 200, si no lo coloco
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })

    }
})

api.delete('/pets/:petId', (req, res) => {
    try {

        const userId = req.headers.authorization.slice(6)

        const { petId } = req.params

        logic.removePet(userId, petId)

        res.status(204).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })

    }
})

api.put('/pets/:petId', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.slice(6)
        const { petId } = req.params
        const { name, birthdate, weight, image } = req.body

        const pet = logic.updatePet(userId, petId, name, birthdate, weight, image)

        res.status(200).json(pet)

    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.listen(8080, () => console.log('API listening on port 8080'))