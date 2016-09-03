class Content extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.serverRequest = APP.ajax.getJSON('http://localhost:3003/gifs.json', function (response) {
            this.setState({
                posts: JSON.parse(response)
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div className="o-content__wrapper">
                <Posts posts={this.state.posts} />
                <Sidebar />
            </div>
        );
    }
}


ReactDOM.render(
    <Content />,
    document.getElementById('content')
);