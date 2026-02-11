import { A } from "./components/commons/A"

import { H1 } from "./components/commons/H1"

export function Landing({ onLogin, onRegisterClick }) {

    const handleLoginClick = event => {
        event.preventDefault()

        onLogin()
    }
    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    return <div className="p-4">
        <H1>MyPet</H1>
        <p>Welcome!</p>
        <nav>
            <A onClick={handleLoginClick}>Login</A> or <A onClick={handleRegisterClick}>Register</A>
        </nav>
    </div>
}