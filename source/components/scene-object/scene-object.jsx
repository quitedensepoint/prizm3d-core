import React, { PropTypes } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

const SceneObject = ({ onClick, id }) => (
  <mesh>
    <boxGeometry
      width={3}
      height={1}
      depth={1}
    />
    <meshBasicMaterial
      color={0x00ff00}
    />
  </mesh>
);

SceneObject.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.bool.isRequired
}

export default SceneObject;
