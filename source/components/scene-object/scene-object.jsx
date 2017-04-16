import React, { PropTypes } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

const SceneObject = ({ id, width, height, depth }) => (
  <mesh>
    <boxGeometry width={width} height={height} depth={depth}/>
    <meshBasicMaterial color={0x00ff00}/>
  </mesh>
);

SceneObject.propTypes = {
  id: PropTypes.bool.isRequired
}

export default SceneObject;
