import { useState, useEffect } from "react"

import { logic } from "../../logic"

import { Button } from "./commons/Button"

export function PetList() {
    const [message, setMessage] = useState('')
    const [deletePetId, setDeletePetId] = useState(null)
    const [petList, setPetList] = useState([])
    const [detailPet, setDetailPet] = useState(null)

    useEffect(() => {
        try {
            logic.getPets()
                .then(pets => {
                    setPetList(pets)
                })
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
                /*
                    .then(() => {
                        setMessage('')
                        logic.getPets()
                            .then(pets => {
                                setPetList(pets)
                                setDeletePetId(null)
                            })
                    })
                */
                //OTRA FORMA
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
        event.preventDefault()
        try {
            const button = event.target
            const idPet = button.id

            logic.getPetById(idPet)
                .then(pet => {
                    setDetailPet(pet)
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleReturnHome = event => {
        event.preventDefault()
        setDetailPet(null)
    }


    return <div>
        <ul className="flex flex-col gap-2 mt-2">
            {petList.map(pet => <li className="flex items-center  border-2 border-black p-2  mb-2 justify-between"  >
                <div className="flex gap-4 items-center" >
                    <img src={pet.image} className="rounded-full w-10 h-10 object-cover" id={pet.id} onClick={handlePetClick} />
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


        {detailPet && <div className="w-full h-full fixed top-0 bg-black/75 flex justify-center items-center" onClick={handleReturnHome} >
            <div className="bg-white border-black border-2 p-2" >

                <div className="flex justify-center gap-2">
                    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                        <div class="flex justify-center p-4">
                            <img class="w-32 h-32 object-cover rounded-full border-4 border-gray-200" src={detailPet.image} alt="Pet" />
                        </div>

                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-center text-gray-900"> {detailPet.name}</div>

                            <div class="space-y-3">
                                <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <span class="text-gray-600 font-medium">🎂 Cumpleaños: </span>
                                    <span class="text-gray-900 font-semibold">{detailPet.birthday}</span>
                                </div>

                                <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <span class="text-gray-600 font-medium">⚖️ Peso:</span>
                                    <span class="text-gray-900 font-semibold">{detailPet.weight}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>}

        <p>{message}</p>
    </div>
}