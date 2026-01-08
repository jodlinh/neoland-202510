const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {
        console.log('App -> call')  //chismoso :-)

        const messageState = useState([])
        const messages = messageState[0]
        const setMessages = messageState[1]

        const handleTitleClick = event => {
                event.preventDefault()

                console.log('title clicked')
        }

        const handleMessageSubmit = event => {
                event.preventDefault()

                const form = event.target

                const message = form.message.value
                const name = form.name.value

                const date = new Date()
                const newMessage = message + ' (' + name + ', ' + date.toLocaleDateString() + ')'

                // WARN! this is not the way in react
                // messages.push(newMessage)   ENTENDIDO !!!!!


                //This correct way
                const newMessages = []

                for (let i = 0; i < messages.length; i++) {
                        const message = messages[i]

                        newMessages.push(message)
                }

                newMessages.push(newMessage)

                setMessages(newMessages)
                //----

                form.reset()
        }

        console.log('App -> render')

        const listItems = []

        for (let i = 0; i < messages.length; i++) {
                const message = messages[i]

                const listItem =
                        <li>
                                <p>{message}</p>
                        </li>

                listItems.push(listItem)
        }

        return <div className="flex flex-col gap-2 p-2">
                <h1 className="text-3x1 cursor-pointer" onClick={handleTitleClick}>Wall</h1>

                <ul className="p-2">
                        {listItems}
                </ul>

                <form className="flex flex-col gap-2 border p-2" onSubmit={handleMessageSubmit}>
                        <h2>Leave your message on the wall</h2>

                        <label htmlFor="message">Message</label>
                        <input className="border" type="text" id="message" placeholder="message" />

                        <label htmlFor="name">Name</label>
                        <input className="border" type="text" id="name" placeholder="name" />

                        <button className="border bg-black text-white cursor-pointer" type="submit">Send</button>
                </form>
        </div>
}