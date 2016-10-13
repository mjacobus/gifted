const mapStateToProps = function(state) {
    return {
        'menuMainOpen': state.header.menuMainOpen
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        'onMainMenuClick': () => {
            dispatch(toggleMainMenu());
        }
    };
};

const HeaderContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
