import { screen, render, within } from '@testing-library/react';
import Bin, { IBin } from '.';

const mockData: IBin = {
    onClearBin: function (): void {
       
    },
    onDeleteItem: function (value: string): void {
      
    },
    bin: [{ id: '1', text: 'mockText', isInBin: true }]
}

test("renders a 'clear button'", () => {
    render(<Bin onClearBin={() => { }} onDeleteItem={() => { }} bin={mockData.bin} />)

    const binEl = screen.getByTestId('bin');
    const clearBtn = within(binEl).getByRole('button', {name: /clear bin/i});

    expect(clearBtn).toBeInTheDocument();

})

test("renders a 'bin - list item'", () => {
    render(<Bin onClearBin={() => { }} onDeleteItem={() => { }} bin={mockData.bin} />)

    const listItems = screen.queryAllByTestId('task-item');

    expect(listItems.length).toBe(1)

})