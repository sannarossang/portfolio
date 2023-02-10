export { Project };

import illustration from "../../assets/illustration.png";

class Project {
  constructor(
    public title: string,
    public img: string,
    public description: string,
    public link: string,
    public languages: string
  ) {}
}

let project1 = new Project(
  "Webshop",
  illustration,
  "Webshop description",
  "http://SannaRossang.com",
  "html"
);

let project2 = new Project(
  "Webshop",
  illustration,
  "Webshop description",
  "http://SannaRossang.com",
  "html"
);

let project3 = new Project(
  "Webshop",
  illustration,
  "Webshop description",
  "http://SannaRossang.com",
  "html"
);

export let projects: Project[] = [project1, project2, project3];
