import { IListItem } from "@/app/interfaces/interfaces";
import ListItem from "../ListItem";

export interface IBin {
    onClearBin: () => void,
    onDeleteItem: (value:string) => void,
    bin: IListItem[],
}

const Bin = ({bin, onClearBin, onDeleteItem}:IBin) => {
    return (
        <div data-testid='bin' className={`absolute h-[400px] w-[400px] bg-gray-800 top-1/2 right-1/2 shadow-2xl -translate-y-50 customScroll border-2 border-gray-950 border-l-0 overflow-auto transition-all ${bin.length > 0 ? 'translate-x-150' : 'translate-x-50'}  divide-y divide-gray-800 `}>
            <button data-testid='clearBtn' onClick={onClearBin} className="p-2 border-1 text-center cursor-pointer hover:bg-gray-900 w-full"> Clear bin 🗑️ </button>
            {bin && bin.map(item => <ListItem {...item} onDelete={onDeleteItem} key={item.id} />)}
        </div>
    )
}

export default Bin;