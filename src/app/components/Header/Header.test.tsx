import {screen, render} from '@testing-library/react';
import Header from '.';

test('header has a title', () => {
    render(<Header />);

    const titleCheck = screen.queryByRole('heading', {level:1, name: /To Do - (Jest) App/i })

    expect(titleCheck).toBeInTheDocument;
    expect(titleCheck).toHaveRole;
});