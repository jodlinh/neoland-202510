const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(<App />)

const useState = React.useState

function App() {
        const displayState = useState('0')
        const displayValue = displayState[0]
        const setDisplayValue = displayState[1]


        const handleDelete = () => {
                let result = displayValue.slice(0, -1)

                if (result.length == 0)
                        result = '0'

                setDisplayValue(result)
        }

        const handlePressedKey = (value) => {
                if (value == 'AC')
                        setDisplayValue('0')
                else if (value === ',') {
                        const lastCharacter = displayValue.at(-1)
                        
                        if (lastCharacter === ',') return

                        let newValue

                        if (lastCharacter == '+' || lastCharacter == '-' || lastCharacter == 'x' || lastCharacter == '÷') {
                                newValue = displayValue + '0,'
                        } 

                        

                        setDisplayValue(newValue)


                }
                else if (value === 'changeSymbol') {
                        const lastCharacter = displayValue.slice(-1)

                        if (displayValue == 0 || lastCharacter == '+' || lastCharacter == '-' || lastCharacter == 'x' || lastCharacter == '÷') return

                        if (lastCharacter == ')') {
                                const charFound = displayValue.lastIndexOf('(')
                                const number = displayValue.substring(charFound)
                                const lastNumberIndex = displayValue.lastIndexOf(number)

                                const remaingNumbers = displayValue.substring(0, lastNumberIndex)
                                const positiveNumber = number.substring(2, number.length - 1)

                                const operation = remaingNumbers + positiveNumber
                                setDisplayValue(operation)

                        } else {
                                for (let i = displayValue.length -1; i > 0; i--) {
                                        const caracter = displayValue.charAt(i)
                                        if (caracter == '+' || caracter == '-' || caracter == 'x' || caracter == '÷') {
                                                const charFound = displayValue.lastIndexOf(caracter)
                                                const number = displayValue.substring(charFound + 1)

                                                const lastNumberIndex = displayValue.lastIndexOf(number)
                                                const remaingNumbers = displayValue.substring(0, lastNumberIndex)
                                                const operation = remaingNumbers + '(-' + number + ')'
                                                setDisplayValue(operation)
                                                return
                                        }
                                }

                                if (displayValue !== 0) {
                                        const cifra = displayValue.substring(0)
                                        const operation = displayValue.replace(cifra, '(-' + cifra + ')')
                                        setDisplayValue(operation)
                                }

                        }
                } else if (displayValue == 0)
                        setDisplayValue(value)
                else if (value === '=') {
                        const operation = displayValue.replaceAll('÷', '/').replaceAll('x', '*')
                        const result = eval(operation)

                        setDisplayValue(result)

                }

                else if (value == '+' || value == '-' || value == 'x' || value == '÷') {
                        const lastCharacter = displayValue.at(-1)

                        if (lastCharacter == '+' || lastCharacter == '-' || lastCharacter == 'x' || lastCharacter == '÷') return

                        setDisplayValue(displayValue + value)
                }

                else {
                        setDisplayValue(displayValue + value)
                }
        }

        return <div className="border-2 m-2 p-2 rounded-2xl bg-gray-800 text-white">
                <div className="flex justify-end px-2 text-3xl" >{displayValue}</div>

                <div className="p-2 flex flex-col gap-2">
                        <div className="flex justify-between">
                                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center" onClick={handleDelete}>⌫</div>
                                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center" onClick={() => handlePressedKey('AC')}>AC</div>
                                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center">%</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center" onClick={() => handlePressedKey('÷')}>÷</div>
                        </div>
                        <div className="flex justify-between">
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('7')}>7</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('8')}>8</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('9')}>9</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center"  onClick={() => handlePressedKey('x')}>x</div>
                        </div>
                        <div className="flex justify-between">
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('4')}>4</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('5')}>5</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('6')}>6</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('-')}>-</div>
                        </div>
                        <div className="flex justify-between">
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('1')}>1</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('2')}>2</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('3')}>3</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('+')} >+</div>
                        </div>
                        <div className="flex justify-between">
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('changeSymbol')}  >+/-</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('0')}>0</div>
                                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey(',')}>,</div>
                                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex 
                        justify-center items-center" onClick={() => handlePressedKey('=')} >=</div>
                        </div>

                </div>
        </div>

}