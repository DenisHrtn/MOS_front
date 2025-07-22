import React from "react";
import { useNavigate} from "react-router-dom";

const projectsData = [
    {
        id: 1,
        title: "First",
        description: "Test project",
        tags: ['Python', 'Django'],
        date: "2024-05-14",
        author: ['Bub'],
        customer:['Luntic']
    },
    {
        id: 2,
        title: "Second",
        description: "Test project",
        tags: ['React', 'JS'],
        date: "2024-07-31",
        author: ['Spider-Men'],
        customer: ['Zeus']
    },
    {
        id: 3,
        title: "Third",
        description: "Test project",
        tags: ['Python', 'FastAPI'],
        date: "2024-06-01",
        author: ['Spider-Men'],
        customer: ['Venom']
    }
];

const Projects = () => {
    const navigate = useNavigate();

    const openProject = (id) => {
        navigate(`/projects/${id}`);
    }


    return (
        <div className="projects-wrap">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => openProject(project.id)}
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="project-header">
                            <h2>{project.title}</h2>
                        </div>
                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>
                        <div className="project-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        <div className="project-date">{project.date}</div>
                        <div className="author-customer">
                            <h1>Project author - {project.author}</h1>
                            <h1>Project customer - {project.customer}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
