const sceneObject = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_SCENEOBJECT':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const sceneObjects = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_SCENEOBJECT':
      return state.map(t =>
        sceneObject(t, action)
      )

    default:
      return state
  }
}

export default sceneObjects
