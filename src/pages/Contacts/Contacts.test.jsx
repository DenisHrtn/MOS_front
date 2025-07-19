import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contacts from "./Contacts";

test('About rendering information about user', () => {
   render(
     <MemoryRouter>
       <Contacts />
     </MemoryRouter>
   );

   expect(screen.getByText('test@gmail.com')).toBeInTheDocument();
   expect(screen.getByText('Username: TEST')).toBeInTheDocument();
   expect(screen.getByText('Github')).toBeInTheDocument();
   expect(screen.getByText('LinkedIn')).toBeInTheDocument();
});
