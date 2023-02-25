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
import { OtherProjects, otherProjects } from "./models/OtherProjects";

function createHTML(projects: Project[]) {
  let projectContainer = document.getElementById(
    "myNewProjects"
  ) as HTMLDivElement;

  projectContainer.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    container.className = "project";

    let title: HTMLHeadElement = document.createElement("h3");
    title.className = "project__title";
    title.innerHTML = projects[i].title;
    container.appendChild(title);

    let img: HTMLImageElement = document.createElement("img");
    img.className = "project__image";
    img.src = projects[i].img;
    container.appendChild(img);

    let description: HTMLSpanElement = document.createElement("span");
    description.className = "project__description";
    description.innerHTML = projects[i].description;
    container.appendChild(description);

    let iconContainer: HTMLDivElement = document.createElement("div");
    iconContainer.className = "project__iconcontainer";
    container.appendChild(iconContainer);

    let projectWebLinkTitle = document.createElement("span");
    projectWebLinkTitle.className = "project__weblinktitle";
    container.appendChild(projectWebLinkTitle);

    let websidelink: HTMLAnchorElement = document.createElement("a");
    websidelink.className = "project__websidelink";
    websidelink.href = projects[i].link;
    // projectWebLinkTitle.innerHTML = "Try it out: ";
    websidelink.innerHTML = '<i class="bi bi-arrow-right-circle-fill"></i>';
    iconContainer.appendChild(websidelink);

    let projectLinkTitle = document.createElement("span");
    projectLinkTitle.className = "project__linktitle";
    container.appendChild(projectLinkTitle);

    let githublink: HTMLAnchorElement = document.createElement("a");
    githublink.className = "project__link";
    githublink.href = projects[i].githublink;
    // projectLinkTitle.innerHTML = "Check it out on github: ";
    githublink.innerHTML = "<i class='bi bi-github'></i>";
    iconContainer.appendChild(githublink);

    let language: HTMLSpanElement = document.createElement("span");
    language.className = "project_langugage";
    container.appendChild(language);

    projectContainer.appendChild(container);
  }
}

function createHTMLOther(otherProjects: OtherProjects[]) {
  let otherProjectContainer = document.getElementById(
    "myOtherProjects"
  ) as HTMLDivElement;

  otherProjectContainer.innerHTML = "";

  for (let i = 0; i < otherProjects.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    container.className = "otherproject";

    // let opcontainer: HTMLDivElement = document.createElement("div");
    // container.className = "otherproject__container";

    let title: HTMLHeadElement = document.createElement("h3");
    title.className = "otherproject__title";
    title.innerHTML = otherProjects[i].title;
    container.appendChild(title);

    // let description: HTMLSpanElement = document.createElement("span");
    // description.className = "otherproject__description";
    // description.innerHTML = otherProjects[i].description;
    // container.appendChild(description);

    let githublink: HTMLAnchorElement = document.createElement("a");
    githublink.className = "otherproject__link";
    githublink.href = otherProjects[i].githublink;
    // projectLinkTitle.innerHTML = "Check it out on github: ";
    githublink.innerHTML = "<i class='bi bi-github'></i>";
    container.appendChild(githublink);

    otherProjectContainer.appendChild(container);
  }
}

createHTML(projects);
createHTMLOther(otherProjects);
