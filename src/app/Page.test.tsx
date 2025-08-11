import { screen, render, fireEvent, within } from '@testing-library/react';
import Home from './page';

describe('unit test for Page', () => {
    test('renders a Header component', () => {
        render(<Home />);

        const header = screen.getByRole('banner');

        expect(header).toBeInTheDocument();
    })

    test('renders a list component', () => {
        render(<Home />);

        const todoList = screen.getByTestId('todoList');

        expect(todoList).toBeInTheDocument();
    })

})

describe('intergration test for Page', () => {
    test('remove task functionality from "todo list" ', () => {
        render(<Home />);

        const todoList = screen.queryByTestId('todoList');

        expect(todoList).toBeInTheDocument();

        let taskItems = within(todoList!).queryAllByTestId('task-item');

        fireEvent.click(within(taskItems[0]).getByRole('button'));

        taskItems = within(todoList!).queryAllByTestId('task-item');

        expect(taskItems.length).toBe(1);

    })

    test('Adding a item', () => {
        render(<Home />);

        const todoList = screen.queryByTestId('todoList');

        const inputEl = screen.queryByTestId('todoInput') as HTMLInputElement;

        const inputBtn = screen.queryByTestId('todoBtn') as HTMLButtonElement;

        fireEvent.change(inputEl, { target: { value: 'Bongo' } });

        fireEvent.click(inputBtn);

        let taskItems = within(todoList!).queryAllByTestId('task-item');

        expect(taskItems.length).toBe(3);

    })

    test("Remove task and move it to 'bin' and then recycle back to 'Todo list'", () => {
        render(<Home />);

        const todoList = screen.getByTestId('todoList');

        let taskItems = within(todoList!).getAllByTestId('task-item');

        fireEvent.click(within(taskItems[0]).getByRole('button'))

        taskItems = within(todoList!).getAllByTestId('task-item');

        expect(taskItems.length).toBe(1);

        const binList = screen.getByTestId('bin');

        expect(binList).toBeVisible();

        let binItems = within(binList).queryAllByTestId('task-item');

        expect(binItems.length).toBe(1);
    })

    test('removes a task to bin and clears the bin', () => {
        render(<Home />);

        const todoList = screen.getByTestId('todoList');

        let taskItems = within(todoList!).getAllByTestId('task-item');

        fireEvent.click(within(taskItems[0]).getByRole('button'))

        taskItems = within(todoList!).getAllByTestId('task-item');

        expect(taskItems.length).toBe(1);

        const binList = screen.getByTestId('bin');

        expect(binList).toBeVisible();

        let binItems = within(binList).queryAllByTestId('task-item');

        expect(binItems.length).toBe(1);

        const clearBtn = within(binList).getByTestId('clearBtn');

        fireEvent.click(clearBtn);

        binItems = within(binList).queryAllByTestId('task-item');

        expect(binItems.length).toBe(0);

    })

    test('removes a task to bin and clears the bin, adds a new item and populates the list', () => {
        render(<Home />);

        const todoList = screen.getByTestId('todoList');

        let taskItems = within(todoList!).getAllByTestId('task-item');

        fireEvent.click(within(taskItems[0]).getByRole('button'))

        taskItems = within(todoList!).getAllByTestId('task-item');

        expect(taskItems.length).toBe(1);

        const binList = screen.getByTestId('bin');

        expect(binList).toBeVisible();

        let binItems = within(binList).queryAllByTestId('task-item');

        expect(binItems.length).toBe(1);

        const clearBtn = within(binList).getByTestId('clearBtn');

        fireEvent.click(clearBtn);

        binItems = within(binList).queryAllByTestId('task-item');

        expect(binItems.length).toBe(0);

        const inputEl = screen.queryByTestId('todoInput') as HTMLInputElement;

        const inputBtn = screen.queryByTestId('todoBtn') as HTMLButtonElement;

        fireEvent.change(inputEl, { target: { value: 'Bongo' } });

        fireEvent.click(inputBtn);

        taskItems = within(todoList!).queryAllByTestId('task-item');

        expect(taskItems.length).toBe(2);

    })

})

