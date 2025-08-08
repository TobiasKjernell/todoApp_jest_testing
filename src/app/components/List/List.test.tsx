import { screen, render, fireEvent, within } from '@testing-library/react';
import List, { IList } from '.';

describe('intergration test for list', () => {
    test('remove task functionality', () => {

        const mockData: IList = {
            items: [
                {
                    text: 'test0', id: '123123',
                    isInBin: false,
                },
                {
                    text: 'test1', id: '123124',
                    isInBin: false,
                }],
            onDelete: () => { }
        }

        render(<List {...mockData} onDelete={() => {}}/>);

        let tasksInList = screen.getAllByTestId('task-item');

        expect(tasksInList.length).toBe(2)

        let deleteButton = within(tasksInList[0]).getByRole('button');
        expect(deleteButton).toBeInTheDocument;

        fireEvent.click(deleteButton);

        tasksInList = screen.getAllByTestId('task-item');

        expect(tasksInList.length).toBe(2);
        
    })
})