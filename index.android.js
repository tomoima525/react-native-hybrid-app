/**
 * ChuckNorrisViewer
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import chuckNorris from './js/reducers';
import chuckEpic from './js/epics';
import App from './js/App';

import {
  AppRegistry,
} from 'react-native';

const epicMiddleware = createEpicMiddleware(chuckEpic);

export default class ChuckNorrisViewer extends Component {
  let store = createStore(
    chuckNorris,
    applyMiddleware(epicMiddleware)
  )

  render() {
    <Provider store={store}>
      <App />
    </Provider>
  }
}

AppRegistry.registerComponent('ChuckNorrisViewer', () => ChuckNorrisViewer);
