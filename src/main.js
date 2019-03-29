import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/top-menu";
import "./scripts/parallax";
//import "./scripts/scroll";
import "./scripts/vue-skills";
import "./scripts/vue-works";
import "./scripts/vue-comments";