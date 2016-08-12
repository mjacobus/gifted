class Post extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <article className="o-post">
                <h1 className="o-post__heading a-heading a-heading--dark">
                    <a className="a-heading--link">{this.props.title}</a>
                </h1>
                <h3>{this.props.date.toTimeString()}</h3>
                <a>
                    <img className="o-post__image a-image" src="assets/fullstack.jpg" width="650" height="635" />
                </a>
            </article>
        );
    }
}

class VoteButtons extends React.Component {
    constructor() {
        super();

        this.state = {
            up: false,
            down: false
        };
        this.handleClickVoteUp = this.handleClickVoteUp.bind(this);
        this.handleClickVoteDown = this.handleClickVoteDown.bind(this);
    }

    handleClickVoteUp() {
        this.setState({
            up: !this.state.up,
            down: this.state.up
        });
    }

    handleClickVoteDown() {
        this.setState({
            up: this.state.down,
            down: !this.state.down
        });
    }

    render() {
        const title = this.state.up ? 'liked' : 'haven\'t liked';

        return (
            <div>
                <button onClick={this.handleClickVoteUp} className={this.state.up} title={'You ' + title + ' this.'}>
                    Vote up
                </button>
                <button onClick={this.handleClickVoteDown} className={this.state.down} title={'You ' + title + ' this.'}>
                    Vote down
                </button>
            </div>
        );
    }
}


setInterval(function() {
    ReactDOM.render(
        <Post date={new Date()} title="Too Full Stack" />,
        document.getElementById('posts')
    );
}, 500);

// ReactDOM.render(
//     <VoteButtons />,
//     document.getElementById('voting')
// );