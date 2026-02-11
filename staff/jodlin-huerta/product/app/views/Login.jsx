import { useState } from "react"

import { logic } from "/logic"

import { A } from "./components/commons/A"
import { H1 } from "./components/commons/H1"
import { H2 } from "./components/commons/H2"
import { Form } from "./components/commons/Form"
import { Field } from "./components/commons/Field"
import { PasswordField } from "./components/commons/PasswordField"
import { Button } from "./components/commons/Button"


export function Login({ onLogin, onRegisterClick }) {

    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => {
                    onLogin()
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    return <div className="p-4">
        <H1>MyPet</H1>
        <H2>Login</H2>
        <Form onSubmit={handleLoginSubmit}>

            <Field alias="username">Username</Field>

            <PasswordField alias="password">Password</PasswordField>

            <Button type="submit" className="self-center mt-3">Login</Button>
        </Form>
        <A onClick={handleRegisterClick}>Register</A>

        <p>{message}</p>
    </div>
}