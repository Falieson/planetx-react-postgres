import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';

export default function htmlRoot(element, state) {
  return `
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Ultimate React 2017 - Counter Example</title>
</head>

<body>
  <div id="root">${ReactDOMServer.renderToString(element)}</div>
  <script>
    window.__PRELOADED_STATE__ = ${serialize(state, { isJSON: true })};
  </script>
  <script src="/static/bundle.js"></script>
</body>

</html>
  `;
}