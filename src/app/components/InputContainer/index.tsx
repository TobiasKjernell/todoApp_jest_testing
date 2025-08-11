'use client'
import { IListItem } from "@/app/interfaces/interfaces";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

interface IInputContainer {
    addTask: (item: IListItem) => void,
}

const InputContainer = ({ addTask }: IInputContainer) => {
    const [currentInput, setCurrentInput] = useState<string | ''>('');

    const handleAddToList = (text: string): void => {
        const newItem: IListItem = {
            text: text,
            id: uuid(),
            isInBin: false
        }
        addTask(newItem);
        setCurrentInput('');
    }

    return (
        <div className="h-[250px] flex flex-col">
            <input data-testid='todoInput' onChange={e => setCurrentInput(e.target.value)} value={currentInput} maxLength={20} type="text" placeholder="Your task to do" required id="name" name="name" className="bg-gray-100 text-center h-[70px] text-gray-900 " />
            <button data-testid='todoBtn' disabled={currentInput.length < 1} onClick={() => handleAddToList(currentInput)} className="cursor-pointer bg-gray-900 grow hover:bg-gray-800 disabled:cursor-not-allowed">Add to list</button>
        </div>
    )
}

export default InputContainer;