import { useState } from "react"

import { logic } from "../logic"

import { A } from "./components/commons/A"
import { H1 } from "./components/commons/H1"
import { H2 } from "./components/commons/H2"



export function Pet({ onBackClick }) {

    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

    return <div className="p-4">
        <H1>MyPet</H1>

        <div className="flex justify-between">
            <H2>Pet Details</H2>
            <A onClick={handleBackClick}>&lt; Back</A>
        </div>
    </div>
}