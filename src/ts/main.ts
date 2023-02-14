// import { IRepo } from "./models/IRepo";
// import { getRepos } from "./services/gitService";

// let projects: IRepo[] = [];
// console.log(projects);

// async function getProjects() {
//   projects = await getRepos();
//   console.log(projects);
//   projects.splice(3, 1);
//   console.log(projects);

//   createHtml(projects);
// }

// function createHtml(projects: IRepo[]) {
//   let myGitProjects = document.getElementById(
//     "myGitProjects"
//   ) as HTMLDivElement;

//   for (let i = 0; i < projects.length; i++) {
//     let projectContainer = document.createElement("div");
//     let projectTitle = document.createElement("h2");
//     let projectDescription = document.createElement("span");
//     let projectTagsTitle = document.createElement("span");
//     let projectTags = document.createElement("span");
//     let projectLinkTitle = document.createElement("span");
//     let projectLink = document.createElement("a");
//     let projectLinkIcon = document.createElement("i");
//     // let projectImage = document.createElement("img");

//     projectContainer.className = "project";

//     projectTitle.className = "project__name";
//     projectDescription.className = "project__description";
//     projectTagsTitle.className = "project__tagstitle";
//     projectTags.className = "project__tags";
//     projectLinkTitle.className = "project__linktitle";
//     projectLink.className = "project__link";
//     projectLinkIcon.className = "project__icon";

//     // projectImage.className = "project__image";
//     // projectImage.src =
//     //   "https://github.com/sannarossang/portfolio/blob/master/src/assets/" +
//     //   projects[i].name +
//     //   ".png?raw=true";
//     // projectImage.alt = projects[i].name;

//     projectTitle.innerHTML = projects[i].name;
//     projectDescription.innerHTML = projects[i].description;
//     projectTagsTitle.innerHTML = "Language";
//     projectTags.innerHTML = projects[i].topics;
//     projectLinkTitle.innerHTML = "Check it out";

//     projectLink.href = projects[i].html_url;
//     projectLink.innerHTML = projects[i].html_url;

//     projectLink.appendChild(projectLinkIcon);

//     projectLink.innerHTML = "<i class='bi bi-github'></i>";

//     projectContainer.appendChild(projectTitle);
//     projectContainer.appendChild(projectDescription);
//     projectContainer.appendChild(projectTagsTitle);
//     projectContainer.appendChild(projectTags);
//     projectContainer.appendChild(projectLinkTitle);
//     projectContainer.appendChild(projectLink);
//     // projectContainer.appendChild(projectImage);

//     myGitProjects.appendChild(projectContainer);
//   }
// }

// getProjects();

import { Project, projects } from "./models/Projects";

function createHTML(projects: Project[]) {
  let projectContainer = document.getElementById(
    "myNewProjects"
  ) as HTMLDivElement;

  projectContainer.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let title: HTMLHeadElement = document.createElement("h3");
    let img: HTMLImageElement = document.createElement("img");
    let description: HTMLSpanElement = document.createElement("span");
    let projectLinkTitle = document.createElement("span");
    let githublink: HTMLAnchorElement = document.createElement("a");
    let language: HTMLSpanElement = document.createElement("span");

    container.className = "project";

    img.className = "project__image";
    title.className = "project__title";
    description.className = "project__description";
    projectLinkTitle.className = "project__linktitle";
    githublink.className = "project__link";
    language.className = "project_langugage";

    img.src = projects[i].img;
    title.innerHTML = projects[i].title;
    description.innerHTML = projects[i].description;
    githublink.href = projects[i].githublink;
    projectLinkTitle.innerHTML = "Check it out on github: ";
    githublink.innerHTML = "<i class='bi bi-github'></i>";

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(language);
    container.appendChild(projectLinkTitle);
    container.appendChild(githublink);

    projectContainer.appendChild(container);
  }
}

createHTML(projects);
