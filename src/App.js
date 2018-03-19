import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCw9aY_A8iD5xHwTGQxuszgeyy-ByUWdMQ',
    authDomain: 'manager-b0946.firebaseapp.com',
    databaseURL: 'https://manager-b0946.firebaseio.com',
    projectId: 'manager-b0946',
    storageBucket: 'manager-b0946.appspot.com',
    messagingSenderId: '371056887919'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
