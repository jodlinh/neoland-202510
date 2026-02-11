import { useState } from "react"

import { logic } from "../../logic"

import { Form } from "./commons/Form"

import { Field } from "./commons/Field"

import { Button } from "./commons/Button"


export function UpdateEmailProfile({ }) {
    const [message, setMessage] = useState('')

    const handleChangeEmail = event => {
        event.preventDefault()

        const form = event.target
        const currentEmail = form.currentEmail.value
        const newEmail = form.newEmail.value
        const repeatEmail = form.repeatEmail.value

        try {
            logic.updateUserEmail(currentEmail, newEmail, repeatEmail)
            

            form.reset()
            setMessage('Email has been changed!!')
        } catch (error) {
            setMessage(error.message)
        }
    }


    return <div>
        <Form onSubmit={handleChangeEmail}>
            <Field alias="currentEmail" autoComplete="off">Current Email</Field>
            <Field alias="newEmail" autoComplete="off">New Email</Field>
            <Field alias="repeatEmail">Repeat Email</Field>

            <Button type="submit" className="self-center mt-3">Update Email</Button>
        </Form>
        <p>{message}</p>
    </div>
}