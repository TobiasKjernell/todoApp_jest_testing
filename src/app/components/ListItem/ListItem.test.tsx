import { screen, render } from '@testing-library/react';
import ListItem from '.';
import { IListItem } from '@/app/interfaces/interfaces';

test('renders a destroy button', () => {

    const listMock: IListItem = {
        id: '20',
        text: 'Buy shoes',
        isInBin: false
    }

    render(<ListItem {...listMock} />)

    const destroyBtn = screen.getByRole('button');

    expect(destroyBtn).toBeInTheDocument();

}) 

test('renders text accordingly', () => {

    const listMock: IListItem = {
        id: '20',
        text: 'Buy shoes',
        isInBin: false
    }

    render(<ListItem {...listMock} />)

    const textParagraph = screen.getByText(listMock.text);

    expect(textParagraph).toBeInTheDocument();

}) 