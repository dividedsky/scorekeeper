var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var box = document.querySelector('.react-section');

var e = React.createElement;

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return 'You liked this';
      }

      return e('button', { onClick: function onClick() {
          return _this2.setState({ liked: true });
        } }, 'Like');
    }
  }]);

  return LikeButton;
}(React.Component);

ReactDOM.render(e(LikeButton), box);

var name = "Justin";
var element = React.createElement(
  'h1',
  null,
  'Hello, ',
  name
);

ReactDOM.render(element, box);

// ReactDOM.render(
// <h1>Hello, world</h1>,
// box
// );
var newEl = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello, ',
    name,
    '!'
  ),
  React.createElement(
    'h2',
    null,
    'I am writing html basically inside of js!'
  ),
  React.createElement(
    'p',
    null,
    'that\'s the power of jsx, I suppose'
  )
);

ReactDOM.render(newEl, box);

var rootEl = React.createElement('div', { id: 'root' });

var root = document.getElementsByClassName('root')[0];
console.log(root);

/* function tick() {
  const start = new Date().toLocaleTimeString();
  const clockEl = (
    <div>
<p>
      {new Date().toLocaleTimeString() - start}
</p>
      <h3>It is </h3>
      <p>{new Date().toLocaleTimeString()}.</p>
    </div>
  );
ReactDOM.render(clockEl, root);

} */

// setInterval(tick, 1000);

function closureClock() {
  var start = 0;

  function tick() {
    start += 1;
    return start;
  }
  return tick();
}

var myClock = closureClock;
myClock();