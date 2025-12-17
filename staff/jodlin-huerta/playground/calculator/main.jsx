const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(<App />)

const useState = React.useState

function App() {
        const displayState = useState('0')
        const displayValue = displayState[0]
        const setDisplayValue = displayState[1]


        const handDelete = () => {
                let result = displayValue.slice(0, -1)

                if (result.length == 0)
                        result = '0'

                setDisplayValue(result)
        }

        const pulsed = (value) => {
                if (value == 'AC')
                        setDisplayValue('0')
                else if (value === ',') {
                        const found = displayValue.indexOf(value)
                        if (found === -1)
                                setDisplayValue(displayValue + value)

                } else if (displayValue == 0)
                        setDisplayValue(value)
                else if (value === '=') {
                        const operation = displayValue.replaceAll('÷', '/').replaceAll('x', '*')
                        const result = eval(operation)

                        setDisplayValue(result)

                } else {


                        setDisplayValue(displayValue + value)
                }

        }

        return <div className="border-2 m-2 p-2 rounded-2xl bg-gray-800 text-white">
                <div className="flex justify-end px-2 text-3xl" >{displayValue}</div>

                <div className="p-2 flex flex-col gap-2">
                        <div className="flex justify-between">
                                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center" onClick={handDelete}>⌫</div>
                                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center" onClick={() => pulsed('AC')}>AC</div>
                                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center">%</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center" onClick={() => pulsed('÷')}>÷</div>
                        </div>
                        <div className="flex justify-between">
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('7')}>7</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('8')}>8</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('9')}>9</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center"  onClick={() => pulsed('x')}>x</div>
                        </div>
                        <div className="flex justify-between">
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('4')}>4</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('5')}>5</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('6')}>6</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('-')}>-</div>
                        </div>
                        <div className="flex justify-between">
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('1')}>1</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('2')}>2</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('3')}>3</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('+')} >+</div>
                        </div>
                        <div className="flex justify-between">
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center">+/-</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('0')}>0</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed(',')}>,</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => pulsed('=')} >=</div>
                        </div>

                </div>
        </div>

}