export function Feedback({ feedback }) {
    return <p className={feedback.level === 'success' ? 'text-green-700' : feedback.level === 'error' ? 'text-red-700' : 'text-yellow-700'}>{feedback.msg}</p>
}