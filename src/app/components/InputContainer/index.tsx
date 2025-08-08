

interface IInputContainer {
    onClick: (item: string) => void,
    onValueChange: (val: string) => void,
    currentInput: string
}

const InputContainer = ({ onClick, currentInput, onValueChange }: IInputContainer) => {
    return (
        <div className="h-[250px] flex flex-col">
            <input onChange={e => onValueChange(e.target.value)} value={currentInput} maxLength={20} type="text" placeholder="Your task to do" required id="name" name="name" className="bg-gray-100 text-center h-[70px] text-gray-900 " />
            <button disabled={currentInput.length < 1} onClick={() => onClick(currentInput)} className="cursor-pointer bg-gray-900 grow hover:bg-gray-800 disabled:cursor-not-allowed">Add to list</button>
        </div>
    )
}

export default InputContainer;