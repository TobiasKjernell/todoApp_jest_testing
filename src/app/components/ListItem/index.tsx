import { IListItem } from "@/app/interfaces/interfaces";

const ListItem = ({ text, id, onDelete, isInBin }: IListItem) => {
    return (
        <li data-testid='task-item' className="bg-gray-700 h-20 flex items-center justify-center relative ">
            <p className="text-center max-w-50 flex-wrap">{text}</p>
            <button onClick={() => onDelete!(id)} className="top-auto right-[10px] absolute text-2xl cursor-pointer hover:bg-gray-900 p-1 rounded-xl ">{!isInBin ? '❌' : '🔙' }</button>
        </li>
    )
}

export default ListItem;