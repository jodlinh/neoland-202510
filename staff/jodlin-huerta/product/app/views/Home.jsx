import { useState, useEffect } from 'react'
import { A } from "./components/commons/A"
import { H1 } from "./components/commons/H1"
import { H2 } from "./components/commons/H2"
import { Button } from "./components/commons/Button"
import { PetList } from "./components/PetList"

import { logic } from "../logic"

export function Home({ onLogout, onAddPetClick, onProfileClick, onPetDetailClick }) {

    const handleLogoutClick = event => {
        event.preventDefault()

        logic.logoutUser()

        onLogout()
    }

    const handleAddPetClick = event => {
        event.preventDefault()

        onAddPetClick()
    }

    const handlePetDetailClick = idPet => {
        onPetDetailClick(idPet)
    }

    const handleProfileClick = event => {
        event.preventDefault()

        onProfileClick()
    }

    return <div className="p-4" >
        <H1>MyPet</H1>
        <H2>Welcome Home!</H2>

        <div className="flex justify-between">
            <A className="font-bold " onClick={handleAddPetClick}>+ Pet</A>
            <A className="font-bold self-center" onClick={handleProfileClick}>👤 Profile</A>
            <A onClick={handleLogoutClick}>Logout</A>
        </div>

        <PetList onPetDetailClick={handlePetDetailClick} />

    </div>
}