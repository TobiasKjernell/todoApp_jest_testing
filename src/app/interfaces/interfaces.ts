export interface IListItem {
    id: string,
    text: string;
    onDelete?: (value: string) => void,
    isInBin: boolean
}
