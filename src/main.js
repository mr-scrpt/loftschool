import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
  require("file-loader!./sections/header.pug");
  require("file-loader!./sections/footer.pug");
}

import "./scripts/skills";