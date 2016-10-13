class Post extends React.Component {
    constructor() {
        super();
    }

    render() {
        var props = this.props;

        return (
            <article className="m-post" key={props.id}>
                <h1 className="m-post__heading a-heading a-heading--dark">
                    <a className="a-heading__link" href={props.link}>{props.title}</a>
                </h1>
                <a className="m-post__link" href={props.link}>
                    <img className="m-post__image a-image" src={props.url} />
                </a>
            </article>
        );
    }
}