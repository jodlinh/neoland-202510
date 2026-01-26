const { useState } = React

function Login({ onLogin, onRegisterClick }) {

    const [message, setMessage] = useState('')
    const [passwordType, setPasswordType] = useState('password')

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)

            form.reset()

            setMessage('')
            setPasswordType('password')

            onLogin()
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleTogglePasswordClick = event => {
        event.preventDefault()
        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }



    return <div className="p-4">
        <H1>MyPet</H1>
        <H2>Login</H2>
        <Form onSubmit={handleLoginSubmit}>

            <Field alias="username">Username</Field>

            <PasswordField alias="password">Password</PasswordField>

            <Button type="submit" className="self-center mt-3">Login</Button>
        </Form>
        <A onClick={handleRegisterClick}>Register</A>

        <p>{message}</p>
    </div>
}