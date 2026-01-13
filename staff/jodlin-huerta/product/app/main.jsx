const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

const { useState, useRef } = React

function App() {

    const [view, setView] = useState('landing')
    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [passwordRepeatType, setPasswordRepeatType] = useState('password')
    const [pets, setPets] = useState([])
    const [petDelete, setDeletePet] = useState('')

    const loginFormRef = useRef()
    const registerFormRef = useRef()

    const [modal, setModal] = useState('none')

    const handleLoginClick = event => {
        event.preventDefault()

        if (registerFormRef.current)
            registerFormRef.current.reset()

        setView('login')
        setMessage('')
        setPasswordType('password')
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        if (loginFormRef.current)
            loginFormRef.current.reset()

        setView('register')
        setMessage('')
        setPasswordType('password')
        setPasswordRepeatType('password')
    }


    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target
        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)

            form.reset()

            const pets = logic.getPets()
            const newPets = []

            for (const pet of pets) {
                newPets.push(pet)
            }

            setMessage('')
            setView('home')
            setPets(newPets)
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleTogglePasswordClick = event => {
        event.preventDefault()
        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }
    const handleTogglePasswordRepeatClick = event => {
        event.preventDefault()
        setPasswordRepeatType(passwordRepeatType === 'password' ? 'text' : 'password')
    }

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)
            form.reset()
            setView('login')
            setMessage('')
            setPasswordType('password')
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            setView('login')

        } catch {
            setMessage('sorry, no vas a salir')
        }
    }

    const handleAddPetClick = event => {
        event.preventDefault()

        setView('addpet')

    }

    const handleBackClick = event => {
        event.preventDefault()

        setView('home')
    }

    const handleAddpetSubmit = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const birthday = form.birthday.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.addPet(name, birthday, weight, image)
            form.reset()

            const pets = logic.getPets()
            const newPets = []

            for (const pet of pets) {
                newPets.push(pet)
            }


            setMessage('')
            setView('home')
            setPets(newPets)
        } catch (error) {
            setMessage(error.message)
        }

    }

    const handleDeletePetClick = event => {
        event.preventDefault()

        const pet = event.target
        const idPet = pet.id

        setDeletePet(idPet)
        setModal('block')
    }

    const handleNoDeletePet = event => {
        event.preventDefault()

        setModal('none')
    }

    const handleYesDeletePet = event => {
        event.preventDefault()

        const pet = petDelete

        try {
            logic.deletePet(pet)

            const pets = logic.getPets()
            const newPets = []

            for (const pet of pets) {
                newPets.push(pet)
            }

            setMessage('')
            setView('home')
            setModal('none')
            setPets(newPets)

        } catch (error) {
            setModal('none')
            setMessage(error.message)
        }
    }


    //Land
    if (view === 'landing')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>
            <p>Welcome!</p>
            <nav>
                <a className="underline font-bold cursor-pointer" onClick={handleLoginClick}>Login</a> or <a className="underline font-bold cursor-pointer" onClick={handleRegisterClick}>Register</a>
            </nav>
        </div>

    //Login
    if (view === 'login')

        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>
            <h2 className="font-bold">Login</h2>
            <form className="flex flex-col" onSubmit={handleLoginSubmit}>

                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text" className="border" />

                <label htmlFor="password">Password</label>
                <input className={'border' + (passwordType === 'password' ? '' : ' bg-[gold]')} id="password" name="password" type={passwordType} />

                <button className="self-end bg-black text-white px-2 mb-2" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>

                <button className="bg-black text-white px-1" type="submit">Login</button>
            </form>
            <a className="underline font-bold cursor-pointer" onClick={handleRegisterClick}>Register</a>

            <p>{message}</p>
        </div>

    //Register
    if (view === 'register')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>
            <h2 className="font-bold">Register</h2>

            <form className="flex flex-col" onSubmit={handleRegisterSubmit}>

                <label htmlFor="name">Name</label>
                <input className="border" id="name" name="name" type="text" />

                <label htmlFor="email">Email</label>
                <input className="border" id="email" name="email" type="email" />

                <label htmlFor="username">Username</label>
                <input className="border" id="username" name="username" type="text" />

                <label htmlFor="password">Password</label>
                <div className="flex">
                    <input className={passwordType === 'password' ? 'border' : 'border bg-[gold]'} id="password" name="password" type={passwordType} />
                    <button className="bg-black text-white px-2 ms-4" onClick={handleTogglePasswordClick}>{passwordType === 'password' ? 'Show' : 'Hide'}</button>
                </div>

                <label htmlFor="passwordRepeat">Repeat Password</label>
                <div>
                    <input className={passwordRepeatType === 'password' ? 'border' : 'border bg-[gold]'} id="passwordRepeat" name="passwordRepeat" type={passwordRepeatType} />
                    <button className="bg-black text-white px-2 ms-4" onClick={handleTogglePasswordRepeatClick}>{passwordRepeatType === 'password' ? 'Show' : 'Hide'}</button>
                </div>

                <button className="bg-black self-end text-white px-2 mt-4" type="submit">Register</button>
            </form>

            <a className="underline font-bold cursor-pointer" onClick={handleLoginClick}>Login</a>

            <p>{message}</p>
        </div>


    //Home
    if (view === 'home') {
        const petsItems = []

        for (const pet of pets) {

            const petItem = <li className="flex items-center  border-2 border-black p-2  mb-2 justify-between">
                <div className="flex gap-4 items-center">
                    <img src={pet.image} className="rounded-full w-10 h-10 object-cover" />
                    <p>{pet.name}</p>
                </div>
                <button className="bg-black text-white px-1 justify-self-end" id={pet.id} onClick={handleDeletePetClick}>🗑️</button>
            </li>

            petsItems.push(petItem)
        }

        return <div className="p-4" >
            <h1 className="font-bold text-xl">MyPet</h1>
            <h2 className="font-bold">Welcome Home!</h2>

            <ul className="flex flex-col gap-2 mt-2">
                {petsItems}
            </ul>

            <div className="flex justify-between">
                <button className="self-end bg-black text-white px-2 font-bold" onClick={handleAddPetClick}>+ Pet</button>
                <button className="bg-black text-white px-1" onClick={handleLogoutClick}>Logout</button>
            </div>

            <div className="w-full h-full fixed top-0 bg-black/75 flex justify-center items-center" style={{ display: modal }}>
                <div className="bg-white border-black border-2 p-2">
                    <p className="text-center">Delete Pet?</p>
                    <div className="flex justify-center gap-2">
                        <button className="bg-black text-white px-1" onClick={handleNoDeletePet}>❌No</button>
                        <button className="bg-black text-white px-1" onClick={handleYesDeletePet}>✅Yes</button>
                    </div>
                </div>
            </div>

            <p>{message}</p>
        </div>
    }

    //Add Pet
    if (view === 'addpet')

        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>

            <div className="flex justify-between">
                <h2 className="font-bold">Add Pet!</h2>
                <a className="underline font-bold cursor-pointer" onClick={handleBackClick}>&lt; Back</a>
            </div>

            <form className="flex flex-col" onSubmit={handleAddpetSubmit} name="formRegisterPet">
                <label htmlFor="name">Name</label>
                <input className="border" id="name" name="name" autoComplete="off" type="text" />

                <label htmlFor="birthday">Day of Birth</label>
                <input className="border" id="birthday" name="birthday" autoComplete="off" type="date" />

                <label htmlFor="weight">Weight</label>
                <input className="border" id="weight" name="weight" autoComplete="off" type="number" step="0.01" />

                <label htmlFor="image">Image</label>
                <input className="border" id="image" name="image" autoComplete="off" type="url" />

                <button className="bg-black text-white px-1" type="submit">Add Pet</button>
            </form>

            <p>{message}</p>
        </div>
}

