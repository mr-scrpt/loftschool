import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/top-menu";
import "./scripts/parallax";
//import "./scripts/scroll";
import "./scripts/skills";
import "./scripts/works";