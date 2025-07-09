import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

const projectsData = [
    {
        id: 1,
        name: "Test 2",
        description: "Test project",
        tags: ['JS'],
        date: "2024-07-31",
        stack: ['JSX'],
        author: ['Denis'],
        customer: ['Zeus']
    },
    {
        id: 2,
        name: "Test 3",
        description: "Test project",
        tags: ['Python', 'JS'],
        date: "2024-06-01",
        stack: ['JSX','React','FastAPI'],
        author: ['Pavel'],
        customer: ['Freya']
    }
];

test('ProjectDetails рендерит информацию о проекте', () => {
   render(
       <MemoryRouter initialEntries={['/projects/1']}>
           <Routes>
               <Route path="/projects/:id" element={<ProjectDetails />} />
           </Routes>
       </MemoryRouter>
   );

   expect(screen.getByText('JSX')).toBeInTheDocument();
   expect(screen.getByText('React')).toBeInTheDocument();
   expect(screen.getByText('Python')).toBeInTheDocument();
});