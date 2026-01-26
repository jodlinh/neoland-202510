const { useState } = React

function PasswordField({ alias, children }) {
    const [type, setType] = useState('password')

    const handleTogglePasswordClick = event => {
        event.preventDefault()

        setType(type === 'password' ? 'text' : 'password')
    }


    return <div className="flex flex-col">
        <Label alias={alias}>{children}</Label>
        <div className="flex flex-col">
            <Input alias={alias} type={type} autoComplete="off" className={type === 'password' ? '' : 'bg-[gold]'} />
            <Button className="self-end" onClick={handleTogglePasswordClick} type="button" >{type === 'password' ? 'Show' : 'Hide'}</Button>
        </div>
    </div>
}