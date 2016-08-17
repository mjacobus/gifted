class Content extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.serverRequest = ajax.getJSON('http://localhost:3003/gifs.json', function (response) {
            this.setState({
                posts: JSON.parse(response)
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        const POSTS = this.state.posts;

        return (
            <div>
                {POSTS.map(function(post){
                    const LINK = '/gifs/' + post.id;

                    return <Post key={post.id} title={post.title} url={post.url} link={LINK} />;
                })}
                <Sidebar />
            </div>
        );
    }
}


ReactDOM.render(
    <Content />,
    document.getElementById('content')
);