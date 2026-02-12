import { useState } from "react"
import { Landing } from "./views/Landing"
import { Login } from "./views/Login"
import { Register } from "./views/Register"
import { Home } from "./views/Home"
import { Addpet } from "./views/Addpet"
import { Profile } from "./views/Profile"
import { PetDetail } from "./views/PetDetail"

export function App() {
    const [view, setView] = useState('landing')
    const [petDetail, setPetDetail] = useState(null)

    const handleGoHome = () => {
        setView('home')
    }

    const handleGoLogin = () => {
        setView('login')
    }

    const handleGoRegister = () => {
        setView('register')
    }

    const handleAddPetClick = () => {
        setView('addpet')
    }


    const handleProfileClick = () => {
        setView('profile')
    }

    const handleGoPetDetailClick = (pet) => {
        setView('petDetail')
        setPetDetail(pet)

    }


    return <>
        {(view === 'landing') && <Landing onLogin={handleGoLogin} onRegisterClick={handleGoRegister} />}

        {(view === 'login') && <Login onLogin={handleGoHome} onRegisterClick={handleGoRegister} />}

        {(view === 'register') && <Register onRegister={handleGoLogin} onLoginClick={handleGoLogin} />}

        {(view === 'home') && <Home onLogout={handleGoLogin} onDelete={handleGoHome} onAddPetClick={handleAddPetClick} onProfileClick={handleProfileClick} onPetDetailClick={handleGoPetDetailClick} />}

        {(view === 'addpet') && <Addpet onBackClick={handleGoHome} onAddPet={handleGoHome} />}

        {(view === 'profile') && <Profile onBackClick={handleGoHome} />}

        {(view === 'petDetail') && <PetDetail pet={petDetail} onBackClick={handleGoHome} />}

    </>
}

