class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className="o-header">
                <svg className="o-header__menu-main-icon a-icon a-icon--light" id="menu-main-icon">
                    <use xlinkHref="/assets/symbol-defs.svg#icon-menu"></use>
                </svg>
                <div className="m-menu-main" id="menu-main">
                    <a className="m-menu-main__item a-link a-link--light" href="about.html">About</a>
                    <a className="m-menu-main__item a-link a-link--light" href="/gifs/new">Submit</a>
                </div>

                <a className="a-logo" href="/" title="Home"></a>

                <div className="m-menu-account" id="menu-account">
                    <a className="m-menu-account__link a-link a-link--light" href="login.html">Log In</a>
                    <button className="m-menu-account__button a-button a-button--light">Sign Up</button>
                </div>
                <svg className="o-header__menu-account-icon a-icon a-icon--light" id="menu-account-icon">
                    <use xlinkHref="/assets/symbol-defs.svg#icon-more_vert"></use>
                </svg>
            </header>
        );
    }
}