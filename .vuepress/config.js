const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  title: "پلتفرم فندق",
  description: "وبلاگ سرویس ابری فندق",
  base: "/",
  dest: "./dist",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.css"
      }
    ]
  ]
};
