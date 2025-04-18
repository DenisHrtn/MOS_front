import React, { useState } from "react";

const projectsData = [
    {
        id: 1,
        title: "Test",
        description: "Test project",
        tags: ['Python', 'Django'],
        date: "2024-05-14",
        icon: "☎️"
    },
    {
        id: 2,
        title: "Test 2",
        description: "Test project",
        tags: ['React', 'JS'],
        date: "2024-07-31",
        icon: "🤳"
    },
    {
        id: 3,
        title: "Test 3",
        description: "Test project",
        tags: ['Python', 'FastAPI'],
        date: "2024-06-01",
        icon: "📟"
    }
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const toggleProject = (id) => {
        setActiveProject(activeProject === id ? null : id);
    };

    return (
        <div className="projects-wrap">
            <h1 className="projects-title">My projects</h1>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className={`project-card ${activeProject === project.id ? "active" : ""}`}
                        onClick={() => toggleProject(project.id)}
                        style={{ animationDelay: `${index * 0.15}s`}}
                    >
                        <div className="project-header">
                            <h2>{project.icon}{project.title}</h2>
                            <span>{activeProject === project.id ? "-" : "+"}</span>
                        </div>
                        <div className="project-description">
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-date">{project.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
