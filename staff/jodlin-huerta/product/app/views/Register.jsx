import { useState } from "react"

import { logic } from "../logic"

import { A } from "./components/commons/A"
import { H1 } from "./components/commons/H1"
import { H2 } from "./components/commons/H2"
import { Form } from "./components/commons/Form"
import { Field } from "./components/commons/Field"
import { PasswordField } from "./components/commons/PasswordField"
import { Button } from "./components/commons/Button"



export function Register({ onRegister, onLoginClick }) {

    const [message, setMessage] = useState('')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)
                .then(() => {
                    onRegister()
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }



    const handleTogglePasswordRepeatClick = event => {
        event.preventDefault()
        setPasswordRepeatType(passwordRepeatType === 'password' ? 'text' : 'password')
    }

    const handleLoginClick = () => {
        setMessage('')

        onLoginClick()
    }


    return <div className="p-4">
        <H1>MyPet</H1>
        <H2>Register</H2>

        <Form onSubmit={handleRegisterSubmit}>

            <Field alias="name" type="text">Name</Field>

            <Field alias="email" type="email">Email</Field>

            <Field alias="username" type="text">Username</Field>

            <PasswordField alias="password">Password</PasswordField>

            <PasswordField alias="passwordRepeat">Repeat Password</PasswordField>


            <Button className="self-center mt-3" type="submit">Register</Button>
        </Form>

        <A onClick={handleLoginClick}>Login</A>

        <p>{message}</p>
    </div>

}