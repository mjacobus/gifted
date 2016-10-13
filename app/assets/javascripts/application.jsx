// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require 00_base/libs/react.js
//= require 00_base/libs/react-dom.js
//= require 00_base/libs/redux.js
//= require 00_base/libs/react-redux.js
//= require 03_organisms/header/Header
//= require 03_organisms/header/headerActions
//= require 03_organisms/header/headerContainer
//= require 03_organisms/header/headerReducers
//= require 00_base/gifted/Gifted
//= require rootReducers

const Provider = ReactRedux.Provider;

const initialState = {
    'header': {
        'menuMainOpen': false
    }
};

const store = Redux.createStore(giftedApp, initialState);

ReactDOM.render(
    <Provider store={ store }>
        <Gifted />
    </Provider>,
    document.getElementById('app')
);
