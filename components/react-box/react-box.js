const box = document.querySelector('.react-section');

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

ReactDOM.render(e(LikeButton), box);

const name = "Justin";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, box);