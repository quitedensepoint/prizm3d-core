//Class Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import scene from '../reducers/reducers.js';
import App from './app.js';

//TEMP
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import SceneObject from './scene-object/scene-object.jsx';
//END TEMP

let store = createStore(scene, {
  sceneObjects: [
    {
      width: 3,
      height: 3,
      depth: 3,
      key: 1
    }
  ]
})

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById( 'viewer' ))
