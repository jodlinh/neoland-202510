import { useState, useEffect } from "react"

import { logic } from "../../logic"

import { H1 } from "./commons/H1"
import { H2 } from "./commons/H2"
import { A } from "./commons/A"
import { Form } from "./commons/Form"
import { Field } from "./commons/Field"
import { Button } from "./commons/Button"
import { Feedback } from "./commons/Feedback"


export function UpdatePet({ petObject, onUpdatePet, onBackDetailClick }) {

    const [feedback, setFeedback] = useState(null)
    const [pet, setPet] = useState(null)

    useEffect(() => {
        try {
            setPet(petObject)

        } catch (error) {
            setFeedback({ msg: error.message, level: 'error' })
        }
    }, [])


    const handleUpdatePetSubmit = event => {

        event.preventDefault()

        const petId = petObject.id

        const form = event.target
        const name = form.name.value
        const birthdate = form.birthdate.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.updatePet(petId, name, birthdate, weight, image)
                .then(pet => {
                    onUpdatePet(pet)
                })
                .catch(error => setFeedback({ msg: error.message, level: 'success' }))
        } catch (error) {
            setFeedback({ msg: error.message, level: 'success' })
        }

    }

    const handleBackClick = () => onBackDetailClick()


    return <>
        {pet &&
            <div className="p-4">
                <H1>MyPet</H1>
                <H2>Pet Detail!</H2>

                <div className="flex justify-end">
                    <A onClick={handleBackClick}>Back</A>
                </div>

                <Form onSubmit={handleUpdatePetSubmit} name="formUpdatePet">
                    <Field alias="name" type="text" value={pet.name}>Name</Field>

                    <Field alias="birthdate" type="date" value={pet.birthday}>Day of Birth</Field>

                    <Field alias="weight" type="number" step="0.01" value={pet.weight}>Weight</Field>

                    <Field alias="image" type="url" value={pet.image} >Image</Field>

                    <Button className="self-center" type="submit">Update Pet</Button>
                </Form>

                {feedback && <Feedback feedback={feedback} />}
            </div>
        }
    </>
}