let objectId = 0;
export const toggleSceneObject = ( id ) => {
  return { type: 'TOGGLE_SCENEOBJECT', id }
}

export const setVisibilityFilter = ( filter ) => {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

export const setObjectName = ( id, name ) => {
  return { type: 'SET_OBJECT_NAME', id: 0, name: 'Hello' }
}
