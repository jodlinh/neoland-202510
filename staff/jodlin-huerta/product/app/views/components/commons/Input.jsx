function Input({ alias, type, className, autoComplete, step }) {
    return <input className={`border-1 ${className}`} type={type} id={alias} name={alias} autoComplete={autoComplete || alias} step={step} />
}