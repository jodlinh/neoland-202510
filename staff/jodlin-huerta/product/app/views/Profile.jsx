import { Component, useState } from "react"
import { A } from "./components/commons/A"
import { H1 } from "./components/commons/H1"
import { H2 } from "./components/commons/H2"
import { UpdatePasswordProfile } from "./components/UpdatePasswordProfile"

import { UpdateEmailProfile } from "./components/UpdateEmailProfile"

export function Profile({ onBackClick }) {
    const [view, setView] = useState(null)

    const handleBackClick = event => {
        event.preventDefault()
        onBackClick()
    }

    const handleChangePasswordClick = event => {
        event.preventDefault()

        setView('change-password')
    }

    const handleChangeEmailClick = event => {
        event.preventDefault()

        setView('change-email')
    }

    return <div className="p-4">
        <H1>MyPet</H1>
        <div className="flex justify-between">
            <H2>Profile</H2>
            <A onClick={handleBackClick}>&lt; Back</A>
        </div>

        <ul className="border rounded-lg  mt-4 mb-4">
            <li className="border-b p-5"  ><A onClick={handleChangePasswordClick}> Change password</A></li>
            <li className="p-5" ><A onClick={handleChangeEmailClick}>Change email</A></li>
        </ul>

        {view === 'change-password' && <UpdatePasswordProfile />}
        {view === 'change-email' && <UpdateEmailProfile />}


    </div>


}