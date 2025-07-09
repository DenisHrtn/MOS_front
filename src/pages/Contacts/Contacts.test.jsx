import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contacts from "./Contacts";

test('About rendering information about user', () => {
   render(
     <MemoryRouter>
       <Contacts />
     </MemoryRouter>
   );

   expect(screen.getByText('antropovdavid85@gmail.com')).toBeInTheDocument();
   expect(screen.getByText('Username: P.E.R.O.G')).toBeInTheDocument();
   expect(screen.getByText('Github')).toBeInTheDocument();
   expect(screen.getByText('LinkedIn')).toBeInTheDocument();
});
