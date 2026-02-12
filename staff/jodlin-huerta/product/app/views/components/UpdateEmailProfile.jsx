import { useState } from "react"

import { logic } from "../../logic"

import { Form } from "./commons/Form"

import { Field } from "./commons/Field"

import { Button } from "./commons/Button"

import { Feedback } from "./commons/Feedback"


export function UpdateEmailProfile({ }) {

    const [feedback, setFeedback] = useState(null)

    const handleChangeEmail = event => {
        event.preventDefault()

        const form = event.target
        const currentEmail = form.currentEmail.value
        const newEmail = form.newEmail.value
        const repeatEmail = form.repeatEmail.value

        try {
            logic.updateUserEmail(currentEmail, newEmail, repeatEmail)
                .then(() => {
                    form.reset()
                    setFeedback({ msg: 'Email has been changed!!', level: 'success' })
                })
                .catch(error => setFeedback({ msg: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ msg: error.message, level: 'error' })
        }
    }


    return <div>
        <Form onSubmit={handleChangeEmail}>
            <Field alias="currentEmail" autoComplete="off">Current Email</Field>
            <Field alias="newEmail" autoComplete="off">New Email</Field>
            <Field alias="repeatEmail">Repeat Email</Field>

            <Button type="submit" className="self-center mt-3">Update Email</Button>
        </Form>
        {feedback && <Feedback feedback={feedback} />}
    </div>
}