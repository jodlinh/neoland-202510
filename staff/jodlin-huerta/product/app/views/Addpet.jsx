import { useState } from "react"

import { logic } from "../logic"

import { A } from "./components/commons/A"
import { H1 } from "./components/commons/H1"
import { H2 } from "./components/commons/H2"
import { Form } from "./components/commons/Form"
import { Field } from "./components/commons/Field"
import { Button } from "./components/commons/Button"



export function Addpet({ onBackClick, onAddPet }) {

    const [message, setMessage] = useState('')

    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

    const handleAddpetSubmit = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const birthday = form.birthday.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.addPet(name, birthday, weight, image)
                .then(() => {
                    onAddPet()
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }



    return <div className="p-4">
        <H1>MyPet</H1>

        <div className="flex justify-between">
            <H2>Add Pet!</H2>
            <A onClick={handleBackClick}>&lt; Back</A>
        </div>

        <Form onSubmit={handleAddpetSubmit} name="formRegisterPet">
            <Field alias="name" type="text">Name</Field>

            <Field alias="birthday" type="date">Day of Birth</Field>

            <Field alias="weight" type="number" step="0.01">Weight</Field>

            <Field alias="image" type="url" >Image</Field>

            <Button className="self-center" type="submit">Add Pet</Button>
        </Form>

        <p>{message}</p>
    </div>
}