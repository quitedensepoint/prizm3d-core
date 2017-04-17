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
      key: 1,
      name: 'Boxy',
      rotation: [
        45, 45, 45
      ],
      editMode: true
    }, {
      width: 3,
      height: 10,
      depth: 1,
      key: 2,
      name: 'Brown',
      rotation: [
        45, 45, 45
      ],
      editMode: false
    }
  ]
})

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById( 'viewer' ))
