import { useState, useEffect } from "react"

import { logic } from "../../logic"

import { Button } from "./commons/Button"

export function PetList({ onPetDetailClick }) {
    const [message, setMessage] = useState('')
    const [deletePetId, setDeletePetId] = useState(null)
    const [petList, setPetList] = useState([])

    useEffect(() => {
        try {
            logic.getPets()
                .then(pets => {
                    setPetList(pets)
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }, [])

    const handleDeletePetClick = event => {
        event.preventDefault()

        const button = event.target
        const idPet = button.id

        setDeletePetId(idPet)
    }

    const handleNoDeletePet = event => {
        event.preventDefault()
        setDeletePetId(null)
    }

    const handleYesDeletePet = event => {
        event.preventDefault()

        try {
            logic.deletePet(deletePetId)
                .then(() => {
                    return logic.getPets()
                })
                .then(pets => {
                    setDeletePetId(null)
                    setMessage('')
                    setPetList(pets)
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setDeletePetId(null)

            setMessage(error.message)
        }
    }

    const handlePetClick = event => {
        try {
            const petId = event.currentTarget.dataset.petId

            onPetDetailClick(petId)
        } catch (error) {
            setMessage(error.message)
        }
    }


    return <div>
        <ul className="flex flex-col gap-2 mt-2">
            {petList.map(pet => <li className="flex items-center  border-2 border-black p-2  mb-2 justify-between"  >
                <div className="flex gap-4 items-center" >
                    <img src={pet.image} className="rounded-full w-10 h-10 object-cover" data-pet-id={pet.id} onClick={handlePetClick} />
                    <p>{pet.name}</p>
                </div>
                <div className="justify-self-end ">
                    <Button className="justify-self-end m-1" id={pet.id} onClick={handleDeletePetClick}>🗑️</Button>
                </div>
            </li>)}
        </ul>

        {deletePetId && <div className="w-full h-full fixed top-0 bg-black/75 flex justify-center items-center" >
            <div className="bg-white border-black border-2 p-2">
                <p className="text-center">Delete Pet?</p>
                <div className="flex justify-center gap-2">
                    <Button onClick={handleNoDeletePet}>❌No</Button>
                    <Button onClick={handleYesDeletePet}>✅Yes</Button>
                </div>
            </div>
        </div>}

        <p>{message}</p>
    </div>
}