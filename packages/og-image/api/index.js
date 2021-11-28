'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _playwrightAwsLambda = require('playwright-aws-lambda');

var playwright = _interopRequireWildcard(_playwrightAwsLambda);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontPath = _path2.default.join(_path2.default.resolve('/var/task/packages/og-image/', 'assets'), 'DelaGothicOne-Regular.ttf');
var font = _fs2.default.readFileSync(fontPath, { encoding: 'base64' });

var styles = function styles(font) {
  return '\n  @font-face {\n    font-weight: bold;\n    font-family: \'Dela Gothic One\';\n    src: url(data:font/ttf;charset=utf-8;base64,' + font + ') format(\'truetype\');\n  }\n\n  html,\n  body {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    padding: 0 10%;\n    font-family: \'Dela Gothic One\', cursive;\n    background-color: #16161a;\n  }\n\n  h1 {\n    margin: 0 auto;\n    color: #fffffe;\n    font-size: 3.5rem;\n    letter-spacing: 0.1rem;\n  }\n';
};

var Content = function Content(props) {
  return _react2.default.createElement(
    'html',
    { lang: 'ja' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles(props.font) } })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement(
        'h1',
        null,
        props.title
      )
    )
  );
};

var getLaunchOptions = function getLaunchOptions() {
  if (process.env.NODE_ENV !== 'production') {
    return {
      args: [],
      executablePath: '/usr/bin/google-chrome-stable',
      headless: true
    };
  } else {
    return {
      headless: true
    };
  }
};

var renderOGImage = function renderOGImage(title) {
  var element = _react2.default.createElement(Content, { title: title, font: font });
  var markup = _server2.default.renderToStaticMarkup(element);
  return '<!doctype html>' + markup;
};

exports.default = async function (req, res) {
  var title = req.query.title;
  if (!title) {
    res.status(400).send('title is invalid');
    return;
  }

  var viewport = { width: 1200, height: 630 };

  var browser = await playwright.launchChromium(getLaunchOptions());
  var page = await browser.newPage({ viewport: viewport });

  var html = renderOGImage(req.query.title);
  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  var image = await page.screenshot({ type: 'png' });
  await browser.close();

  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/png');
  res.end(image);
};