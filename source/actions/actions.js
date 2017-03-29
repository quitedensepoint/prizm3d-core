let objectId = 0;
export const toggleSceneObject = (id) => {
  return {
    type: 'TOGGLE_SCENEOBJECT',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
