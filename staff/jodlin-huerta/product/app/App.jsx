const { useState } = React

function App() {
    const [view, setView] = useState('landing')

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

    return <>
        {(view === 'landing') && <Landing onLogin={handleGoLogin} onRegisterClick={handleGoRegister} />}

        {(view === 'login') && <Login onLogin={handleGoHome} onRegisterClick={handleGoRegister} />}

        {(view === 'register') && <Register onRegister={handleGoLogin} onLoginClick={handleGoLogin} />}

        {(view === 'home') && <Home onLogout={handleGoLogin} onDelete={handleGoHome} onAddPetClick={handleAddPetClick} onProfileClick={handleProfileClick} />}

        {(view === 'addpet') && <Addpet onBackClick={handleGoHome} onAddPet={handleGoHome} />}

        {(view === 'profile') && <Profile onBackClick={handleGoHome} />}
    </>
}

