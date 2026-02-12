import { useState, useEffect } from 'react'
import { A } from "./components/commons/A"
import { H1 } from "./components/commons/H1"
import { H2 } from "./components/commons/H2"



export function PetDetail({ pet, onBackClick }) {


    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

 
    return <div className="p-4" >
        <H1>MyPet</H1>
        <H2>Pet Detail!</H2>

        <div className="flex justify-between">

            <A onClick={handleBackClick}>Back</A>
        </div>

        <div className="bg-white border-black border-2 p-2 m-4" >

            <div className="flex justify-center gap-2">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                    <div className="flex justify-center p-4">
                        <img className="w-32 h-32 object-cover rounded-full border-4 border-gray-200" src={pet.image} alt="Pet" />
                    </div>

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center text-gray-900"> {pet.name}</div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                <span className="text-gray-600 font-medium">🎂 Birthday: </span>
                                <span className="text-gray-900 font-semibold">{pet.birthday}</span>
                            </div>

                            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                <span className="text-gray-600 font-medium">⚖️ Weight:</span>
                                <span className="text-gray-900 font-semibold">{pet.weight}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

}
