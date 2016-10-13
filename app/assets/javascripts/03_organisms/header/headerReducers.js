const header = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_MAIN_MENU:
            return Object.assign({}, state, {
                'menuMainOpen': !state.menuMainOpen
            });

        default:
            return state;
    }
};
