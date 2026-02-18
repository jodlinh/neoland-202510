import { useState, useEffect } from 'react'
import { A } from "./components/commons/A"
import { H1 } from "./components/commons/H1"
import { H2 } from "./components/commons/H2"
import { UpdatePet } from "./components/UpdatePet"
import { Feedback } from "./components/commons/Feedback"


import { logic } from "../logic"

export function PetDetail({ idPet, onBackClick }) {
    const [petObject, setPetObject] = useState(null)
    const [feedback, setFeedback] = useState(null)
    const [view, setView] = useState(null)

    useEffect(() => {
        try {
            logic.getPetById(idPet)
                .then(pet => {
                    setPetObject(pet)
                    setView('pet-detail')
                })
                .catch(error => setFeedback({ msg: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ msg: error.message, level: 'error' })
        }
    }, [])


    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

    const handleBackDetailClick = () => {
        setView('pet-detail')
    }

    const handleOnClickPetUpdate = () => {
        setView('update-pet')
    }


    const handleOnUpdatePet = pet => {
        setPetObject(pet)
        setView('pet-detail')
        setFeedback({ msg: 'Pet has been update!!', level: 'success' })
    }






    return <>
        {(view === 'pet-detail') && <div className="p-4" >
            <H1>MyPet</H1>
            <H2>Pet Detail!</H2>

            <div className="flex justify-end">
                <A onClick={handleBackClick}>Back</A>
            </div>




            <div className="gap-2 border-4 rounded-t-lg mt-4 border-indigo-500/50 p-4">
                <div className="flex justify-center">
                    <img className="w-50 h-50 object-cover rounded-full border-4 border-gray-200" src={petObject.image} alt="Pet" />
                </div>
                <div className="px-6 py-1">
                    <div className="font-bold text-xl mb-2 text-center text-gray-900"> {petObject.name} <button onClick={handleOnClickPetUpdate}>✏️</button></div>

                    <div>
                        <div className="flex items-center  bg-gray-50  rounded-lg">
                            <span className="text-gray-600 font-medium ">🎂 Birthday: </span>
                            <span className="text-gray-900 font-semibold ">{petObject.birthday}</span>
                        </div>

                        <div className="flex items-center  bg-gray-50  rounded-lg">
                            <span className="text-gray-600 font-medium ">⚖️ Weight:</span>
                            <span className="text-gray-900 font-semibold ">{petObject.weight} grs</span>
                        </div>

                    </div>
                </div>

            </div>


            {feedback && <Feedback feedback={feedback} />}
        </div>
        }

        {(view === 'update-pet') && <UpdatePet petObject={petObject} onUpdatePet={handleOnUpdatePet} onBackDetailClick={handleBackDetailClick} />}

    </>

}
