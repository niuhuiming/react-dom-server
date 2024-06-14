const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const app = express();

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(<div>Hello world</div>);
  res.send(html);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
