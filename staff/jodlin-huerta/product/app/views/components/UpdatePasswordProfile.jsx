import { useState } from "react"

import { Form } from "./commons/Form"

import { PasswordField } from "./commons/PasswordField"

import { Button } from "./commons/Button"

import { logic } from "../../logic"


export function UpdatePasswordProfile() {
    const [message, setMessage] = useState('')

    const handleChangePassword = event => {
        event.preventDefault()

        const form = event.target
        const currentPassword = form.currentPassword.value
        const newPassword = form.newPassword.value
        const newPasswordRepeat = form.newPasswordRepeat.value

        try {
            logic.updateUserPassword(currentPassword, newPassword, newPasswordRepeat)

            form.reset()
            setMessage('Password has been changed!!')
        } catch (error) {
            setMessage(error.message)
        }
    }

    return <div>
        <Form onSubmit={handleChangePassword}>
            <PasswordField alias="currentPassword">Current password</PasswordField>
            <PasswordField alias="newPassword">New password</PasswordField>
            <PasswordField alias="newPasswordRepeat">Repeat password</PasswordField>

            <Button type="submit" className="self-center mt-3" >Update Password</Button>
        </Form>
        <p>{message}</p>
    </div>
}