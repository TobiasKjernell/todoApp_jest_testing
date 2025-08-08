import { IListItem } from "@/app/interfaces/interfaces";
import ListItem from "../ListItem";

export interface IList {
    items: IListItem[],
    onDelete: (val: string) => void
}

const List = ({ items, onDelete }: IList) => {
    return (
        <ul className="bg-gray-900 divide-y divide-gray-800 overflow-auto scroll-p-4 scroll-smooth customScroll h-[70%]">
            {items && items.map((item) => <ListItem {...item} key={item.id} onDelete={onDelete} />)}
        </ul>
    )
}

export default List;