const app = require("./app");

const port = 3000;

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
});
