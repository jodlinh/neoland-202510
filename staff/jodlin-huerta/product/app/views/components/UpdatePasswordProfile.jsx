import { useState } from "react"

import { Form } from "./commons/Form"

import { PasswordField } from "./commons/PasswordField"

import { Button } from "./commons/Button"

import { logic } from "../../logic"

import { Feedback } from "./commons/Feedback"


export function UpdatePasswordProfile() {
    const [feedback, setFeedback] = useState(null)

    const handleChangePassword = event => {
        event.preventDefault()

        const form = event.target
        const currentPassword = form.currentPassword.value
        const newPassword = form.newPassword.value
        const newPasswordRepeat = form.newPasswordRepeat.value

        try {
            logic.updateUserPassword(currentPassword, newPassword, newPasswordRepeat)
                .then(() => {
                    form.reset()
                    setFeedback({ msg: 'Password has been changed!!', level: 'success' })
                })
                .catch(error => setFeedback({ msg: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ msg: error.message, level: 'error' })
        }
    }

    return <div>
        <Form onSubmit={handleChangePassword}>
            <PasswordField alias="currentPassword">Current password</PasswordField>
            <PasswordField alias="newPassword">New password</PasswordField>
            <PasswordField alias="newPasswordRepeat">Repeat password</PasswordField>

            <Button type="submit" className="self-center mt-3" >Update Password</Button>
        </Form>
        {feedback && <Feedback feedback={feedback} />}
    </div>
}