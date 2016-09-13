class Posts extends React.Component {
    constructor() {
        super();
    }

    render() {
        const POSTS = this.props.posts;

        return (
            <div className="o-posts">
                {POSTS.map(function(post){
                    const LINK = '/gifs/' + post.id;

                    return <Post key={post.id} title={post.title} url={post.url} link={LINK} />;
                })}
            </div>
        );
    }
}