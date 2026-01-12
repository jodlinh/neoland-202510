const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

const useState = React.useState

function App() {

    const [view, setView] = useState('landing')

    const handleLoginClick = event => {
        event.preventDefault()
        setView('login')
    }

    const handleRegisterClick = event => {
        event.preventDefault()
        setView('register')
    }

    const handleHomeClick = event => {
        event.preventDefault()
        setView('home')
    }
    const handleAddpetClick = event => {
        event.preventDefault()
        setView('addpet')
    }


    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target
        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
            form.reset()

            document.getElementById('loginFeedback').innerHTML = ''

            setView('home')
        } catch (error) {
            document.getElementById('loginFeedback').innerHTML = error.message
        }
    }

    const handleLoginShowPasswordButton = event => {
        event.preventDefault()

        const butt = event.target
        const passwordInput = document.getElementById('password')
        if (butt.textContent === 'Show') {
            passwordInput.type = 'text'
            butt.textContent = 'Hide'
        } else {
            passwordInput.type = 'password'
            butt.textContent = 'Show'
        }
    }

    const handleRegisterShowPasswordButton = event => {
        event.preventDefault()

        const butt = event.target
        const passwordInput = document.getElementById('password')
        if (butt.textContent === 'Show') {
            passwordInput.type = 'text'
            butt.textContent = 'Hide'
        } else {
            passwordInput.type = 'password'
            butt.textContent = 'Show'
        }
    }


    const handleRegisterShowPasswordRepeatButton = event => {
        event.preventDefault()

        const butt = event.target
        const passwordInput = document.getElementById('passwordRepeat')
        if (butt.textContent === 'Show') {
            passwordInput.type = 'text'
            butt.textContent = 'Hide'
        } else {
            passwordInput.type = 'password'
            butt.textContent = 'Show'
        }
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
            document.getElementById('loginFeedback').innerHTML = ''

            setView('login')
        } catch (error) {
            document.getElementById('loginFeedback').innerHTML = error.message
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
                <input id="username" type="text" className="border" />
                <label htmlFor="password">Password</label>
                <input className="border" id="password" type="password" />
                <button className="self-end bg-black text-white px-2 mb-2" onClick={handleLoginShowPasswordButton}>Show</button>
                <button className="bg-black text-white px-1" type="submit">Login</button>
            </form>
            <a className="underline font-bold cursor-pointer" onClick={handleRegisterClick}>Register</a>

            <p id="loginFeedback"></p>
        </div>


    //Register
    if (view === 'register')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>
            <h2 className="font-bold">Register</h2>
            <form className="flex flex-col" onSubmit={handleRegisterSubmit}>
                <label htmlFor="name">Name</label>
                <input className="border" id="name" type="text" />
                <label htmlFor="email">Email</label>
                <input className="border" id="email" type="email" />
                <label htmlFor="username">Username</label>
                <input className="border" id="username" type="text" />
                <label htmlFor="password">Password</label>
                <div className="flex">
                    <input className="border" id="password" type="password" />
                    <button className="bg-black text-white px-2 ms-4" onClick={handleRegisterShowPasswordButton}>Show</button>
                </div>
                <label htmlFor="passwordRepeat">Repeat Password</label>
                <div>
                    <input className="border" id="passwordRepeat" type="password" />
                    <button className="bg-black text-white px-2 ms-4" onClick={handleRegisterShowPasswordRepeatButton}>Show</button>
                </div>
                <button className="bg-black self-end text-white px-2 mt-4" type="submit">Register</button>
            </form>
            <a className="underline font-bold cursor-pointer" onClick={handleLoginClick}>Login</a>

            <p id="loginFeedback"></p>
        </div>


    //Home
    if (view === 'home')
        return <div className="p-4" >
            <h1 className="font-bold text-xl">MyPet</h1>
            <h2 className="font-bold">Welcome Home!</h2>
            <ul className="flex flex-col gap-2 mt-2">
                <li className="flex items-center  border-2 border-black p-2  mb-2 justify-between">
                    <div className="flex gap-4 items-center">
                        <img src="https://imgs.search.brave.com/FYtDN7k-CQeWYD6it8zovBuYQCsR-KnBXv81w8Hfnuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bXktZG9nLWRyZXNz/ZWQtdXAtYXMtdGhl/LXN1bHRhbi1mcm9t/LWJlYXV0eS1hbmQt/dGhlLWJlYXN0LXYw/LWNnZmc0cHN2cHZw/ZTEuanBnP3dpZHRo/PTY0MCZjcm9wPXNt/YXJ0JmF1dG89d2Vi/cCZzPTk5NmI5NWE4/ZjljZWYwYmU5ZTI2/YzJmMDgyN2ZkNzk0/MTAxYTRiYjU" className="rounded-full w-10 h-10 object-cover" />
                        <p>sultan</p>
                    </div>
                    <button className="bg-black text-white px-1 justify-self-end" id="pet-0">🗑️</button>
                </li>
            </ul>
            <div className="flex justify-between">
                <button className="self-end bg-black text-white px-2 font-bold">+ Pet</button>
                <button className="bg-black text-white px-1">Logout</button>
            </div>
            <div className="w-full h-full fixed top-0 bg-black/75 flex justify-center items-center" style={{ display: 'none' }}>
                <div className="bg-white border-black border-2 p-2">
                    <p className="text-center">Delete Pet?</p>
                    <div className="flex justify-center gap-2">
                        <button className="bg-black text-white px-1">❌No</button>
                        <button className="bg-black text-white px-1">✅Yes</button>
                    </div>
                </div>
            </div>
            <p id="loginFeedback"></p>
        </div>
    //Add Pet
    if (view === 'addpet')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>
            <div className="flex justify-between">
                <h2 className="font-bold">Add Pet!</h2>
                <a className="underline font-bold cursor-pointer">&lt; Back</a>
            </div>
            <form className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input className="border" id="name" type="text" />
                <label htmlFor="birthday">Day of Birth</label>
                <input className="border" id="birthday" type="date" />
                <label htmlFor="weight">Weight</label>
                <input className="border" id="weight" type="number" step="0.01" />
                <label htmlFor="image">Image</label>
                <input className="border" id="image" type="url" />
                <button className="bg-black text-white px-1" type="submit">Add Pet</button>
            </form>
            <p id="loginFeedback"></p>
        </div>


}

