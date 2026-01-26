const { useState, useEffect } = React

function Home({ onLogout, onAddPetClick, onProfileClick }) {

    const [message, setMessage] = useState('')


    const handleLogoutClick = event => {
        event.preventDefault()

        try {

            setMessage('')

            onLogout()
        } catch {
            setMessage('sorry, no vas a salir')
        }
    }

    const handleAddPetClick = event => {
        event.preventDefault()

        onAddPetClick()
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
            <Button onClick={handleLogoutClick}>Logout</Button>
        </div>

        <PetList />
        <p>{message}</p>
    </div>
}