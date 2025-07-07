import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import About from "./About";

test('About rendering information about user', () => {
   render(<About />);

   expect(screen.getByText('antropovdavid85@gmail.com')).toBeInTheDocument();
   expect(screen.getByText('Username: P.E.R.O.G')).toBeInTheDocument();
   expect(screen.getByText('Github')).toBeInTheDocument();
   expect(screen.getByText('LinkedIn')).toBeInTheDocument();
});