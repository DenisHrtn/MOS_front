import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import {ThemeContext, ThemeProvider} from "../../ThemeContext";
import { BrowserRouter } from "react-router-dom";

test('Header рендерит ссылки и переключатель темы', () => {
   const setDarkMode = jest.fn();
   const darkMode = false;

   render(
       <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <BrowserRouter>
             <Header />
          </BrowserRouter>
       </ThemeContext.Provider>
   );

   // тесты рендеринга ссылок
   expect(screen.getByText('A.D.')).toBeInTheDocument();
   expect(screen.getByText('Home')).toBeInTheDocument();
   expect(screen.getByText('About')).toBeInTheDocument();
   expect(screen.getByText('Contacts')).toBeInTheDocument();
   expect(screen.getByText('Projects')).toBeInTheDocument();

   // тесты кнопки переключения темы
   const toggleBtn = screen.getByRole('button', { name: /toggle theme/i });

   expect(toggleBtn).toHaveTextContent('☀️');

   fireEvent.click(toggleBtn);

   expect(setDarkMode).toHaveBeenCalledWith(true);
});