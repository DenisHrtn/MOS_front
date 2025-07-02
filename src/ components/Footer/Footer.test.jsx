import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import FAQ from "../FAQ/FAQ";

jest.mock('../FAQ/FAQ', () => () => <div data-testid="faq-component">FAQ Mock</div>)

test('Footer рендерит FAQ и копирайт', () => {
    render(<Footer />);

    expect(screen.getByTestId('faq-component')).toBeInTheDocument();
    expect(screen.getByText(/© 2025 My Own Site. All Rights Reserved./i)).toBeInTheDocument()
});