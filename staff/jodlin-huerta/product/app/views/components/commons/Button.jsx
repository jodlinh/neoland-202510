function Button({ children, type, className, onClick, id }) {
    return <button className={`bg-black text-white px-3 ${className}`} type={type} onClick={onClick} id={id}>{children}</button>
}