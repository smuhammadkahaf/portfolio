async function loadProjects() {

  const response = await fetch('data/projects.json');

  const projects = await response.json();

  const container = document.getElementById('projects-container');

  projects.forEach(project => {

    const tags = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join('');

    container.innerHTML += `
      <div class="project-card card">

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="project-tags">
          ${tags}
        </div>

        <a href="${project.github}" target="_blank">
          GitHub Repository
        </a>

      </div>
    `;
  });
}
