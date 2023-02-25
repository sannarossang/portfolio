export { Project };

import webshop from "../../assets/webshopsquare.png";
import bucketlist from "../../assets/bucketlistnewsquare.png";
import favoritespot from "../../assets/favoritespotssquare.png";

class Project {
  constructor(
    public title: string,
    public img: string,
    public description: string,
    public githublink: string,
    public languages: string,
    public link: string
  ) {}
}

let project1 = new Project(
  "Webshop",
  webshop,
  "group project with brilliant julia carlberg and ida lindgren. webshop built with typescript.",
  "https://github.com/sannarossang/webshop.git",
  "html",
  "https://rossang-webshop.netlify.app/"
);

let project2 = new Project(
  "Bucket list",
  bucketlist,
  "as my first assignment in javascript I created a to do-list but upgrated it to a bucket list!",
  "https://github.com/sannarossang/bucket-list.git",
  "html",
  "https://rossang-bucketlist.netlify.app/"
);

let project3 = new Project(
  "Favorite Spots",
  favoritespot,
  "created my first app with graphQL. the result was hidden gems in stockholm!",
  "https://github.com/sannarossang/favorite-spots-stockholm.git",
  "html",
  "https://rossang-bucketlist.netlify.app/"
);

export let projects: Project[] = [project1, project2];
