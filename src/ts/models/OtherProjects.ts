export { OtherProjects };

class OtherProjects {
  constructor(
    public title: string,
    // public description: string,
    public githublink: string
  ) {}
}

let otherProject0 = new OtherProjects(
  "Small app in two days with GraphQL",
  "https://github.com/sannarossang/favorite-spots-stockholm.git"
);

let otherProject1 = new OtherProjects(
  "Shopping cart with REST-API",
  "https://github.com/sannarossang/shopping-cart-rest-.git"
);

let otherProject2 = new OtherProjects(
  "Shopping cart with GraphQL-API",
  "https://github.com/sannarossang/shopping-cart-graphql.git"
);

let otherProject3 = new OtherProjects(
  "E2E-testing",
  "https://github.com/sannarossang/e2e-assignment.git"
);

let otherProject4 = new OtherProjects(
  "Unit testing",
  "https://github.com/sannarossang/unittest-assignment.git"
);

let otherProject5 = new OtherProjects(
  "Integration testing",
  "https://github.com/sannarossang/integrationstests-assignment.git"
);

export let otherProjects: OtherProjects[] = [
  otherProject0,
  otherProject1,
  otherProject2,
  otherProject3,
  otherProject4,
  otherProject5,
];
