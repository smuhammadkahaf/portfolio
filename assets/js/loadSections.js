async function loadSection(id, file) {

  const response = await fetch(file);

  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}

async function initializeWebsite() {

  await loadSection('hero', 'sections/hero.html');
  await loadSection('about', 'sections/about.html');
  await loadSection('skills', 'sections/skills.html');
  await loadSection('projects', 'sections/projects.html');
  await loadSection('achievements', 'sections/achievements.html');
  await loadSection('contact', 'sections/contact.html');
  await loadSection('footer', 'sections/footer.html');

  // Load projects AFTER sections exist
  loadProjects();
}

initializeWebsite();