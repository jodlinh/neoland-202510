export function Form({ children, className = '', onSubmit, name }) {
    return <form className={`flex flex-col ${className}`} onSubmit={onSubmit} name={name}>{children}</form>
}