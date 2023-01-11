import { IRepo } from "./models/IRepo";
import { getRepos } from "./services/gitService";

let projects: IRepo[] = [];

async function getProjects() {
  projects = await getRepos();
  console.log(projects);
  createHtml(projects);
}

function createHtml(projects: IRepo[]) {
  let myGitProjects = document.getElementById(
    "myGitProjects"
  ) as HTMLDivElement;

  for (let i = 0; i < projects.length; i++) {
    let projectContainer = document.createElement("div");
    let projectTitle = document.createElement("h2");
    let projectDescription = document.createElement("span");
    //let projectLink = document.createElement("a");
    let projectImage = document.createElement("img");

    projectContainer.className = "project";

    projectTitle.className = "project__name";
    projectDescription.className = "project__description";
    // projectLink.className = "project__link";

    projectImage.className = "project__image";
    projectImage.src =
      "https://github.com/sannarossang/portfolio/blob/master/src/assets/" +
      projects[i].name +
      ".png?raw=true";
    projectImage.alt = projects[i].name;

    projectTitle.innerHTML = projects[i].name;
    projectDescription.innerHTML = projects[i].name;

    // projectLink.href = projects[i].name;
    //projectLink.innerHTML = projects[i].gitUrl;

    //projectLink.innerHTML += projects[i].id;
    projectImage.innerHTML = projects[i].gitUrl;

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectDescription);
    //projectContainer.appendChild(projectLink);
    projectContainer.appendChild(projectImage);

    myGitProjects.appendChild(projectContainer);
  }
}

getProjects();
