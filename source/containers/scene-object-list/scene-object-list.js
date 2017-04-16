import React, { PropTypes } from 'react'
import SceneObject from '../../components/scene-object/scene-object.jsx'

const SceneObjectList = ({ sceneObjects, onSceneObjectToggle }) => (
  sceneObjects
)

SceneObjectList.propTypes = {
  sceneObjects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onSceneObjectToggle: PropTypes.func.isRequired
}

export default SceneObjectList
