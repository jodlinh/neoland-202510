function A({ children, className, onClick }) {
    return <a className={`font-bold cursor-pointer text-sm underline decoration-double  ${className}`} onClick={onClick}>{children}</a>
}