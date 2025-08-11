import { screen, render, fireEvent } from '@testing-library/react';
import InputContainer from '.';

test('component should render a input', () => {
    render(<InputContainer addTask={() => { }} />)
    const inputEl = screen.getByPlaceholderText('Your task to do')
    expect(inputEl).toBeInTheDocument();
})

test('input should be updated when putting in a string', () => {
        render(<InputContainer addTask={() => { }} />)
        const inputEl = screen.getByTestId('todoInput') as HTMLInputElement;
        fireEvent.change(inputEl, { target: { value: 'hej' } })
        expect(inputEl.value).toBe('hej')
})

describe('button tests', () => {

    test('component should render a button', () => {
        render(<InputContainer addTask={() => { }} />)
        const addBtn = screen.getByRole('button');
        expect(addBtn).toBeInTheDocument();
    })

    test('component should be disabled if no input value', () => {
        render(<InputContainer addTask={() => { }} />)
        const addBtn = screen.getByRole('button');
        const inputEl = screen.getByPlaceholderText('Your task to do');
        fireEvent.change(inputEl, { target: { value: '' } })
        expect(addBtn).toBeDisabled();
    })

      test('component should not be disabled if value', () => {
        render(<InputContainer addTask={() => { }} />)
        const addBtn = screen.getByRole('button');
        const inputEl = screen.getByPlaceholderText('Your task to do');
        fireEvent.change(inputEl, { target: { value: 'h' } })
        expect(addBtn).not.toBeDisabled();
    })

})