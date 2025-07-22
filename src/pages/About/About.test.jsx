import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import About from "./About";

test('About rendering information about user', () => {
   render(<About />);

   expect(screen.getByText('Skills')).toBeInTheDocument();
   expect(screen.getByText('Birthday:')).toBeInTheDocument();
   expect(screen.getByText('Gender:')).toBeInTheDocument();
   expect(screen.getByText('Country:')).toBeInTheDocument();
   expect(screen.getByText('Native language:')).toBeInTheDocument();
   expect(screen.getByText('Second language:')).toBeInTheDocument();
   expect(screen.getByText('Experience')).toBeInTheDocument();
   expect(screen.getByText('Alien')).toBeInTheDocument();
});
