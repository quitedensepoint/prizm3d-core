import { connect } from 'react-redux';
import SceneObjectList from '../scene-object-list/scene-object-list.js';

const getVisibleSceneObjects = (sceneObjects, filter) {
  switch (filter) {
    case default:
      return sceneObjects
  }
}

const mapStateToProps = (state) => {
  return {
    sceneObjects: getVisibleSceneObjects(state.sceneObjects, state.visibleObjects)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSceneObjectToggle: (id) => {
      dispatch(toggleSceneObject)
    }
  }
}

const VisibleSceneObjects = connect(
  mapStateToProps,
  mapDispatchToProps
)(SceneObjectList);

export default VisibleSceneObjects;
