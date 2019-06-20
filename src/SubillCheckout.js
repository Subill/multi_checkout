import React, { Component } from 'react';
import ServicebotRequest from "./service-request.js"
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import Load from "./utilities/load.js"
import '../scss/main.scss';
class App extends Component {
  render() {
      const options = (state = {currency : {value : "ngn"}}, action) => {
          switch (action.type) {
              case 'SET_CURRENCY':
                  return action.filter
              default:
                  return state
          }
      }
      const loadingReducer = (state = true, action) => {
          switch(action.type){
              case "SET_LOADING" :
                  return action.is_loading;
              default:
                  return state;
          }
      };
      const oauthReducer = (state = {}, action) => {
          switch(action.type){
              case "SET_OAUTH" :
                  return action.response;
              default:
                  return state;
          }
      };


      let store = createStore(combineReducers({
          options,
          loading : loadingReducer,
          form : formReducer,
          oauthResponse: oauthReducer
      }));

      return (
      <div className="App">
      <Provider store={store}>
          <div>
              <Load/>
              <ServicebotRequest {...this.props}/>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
