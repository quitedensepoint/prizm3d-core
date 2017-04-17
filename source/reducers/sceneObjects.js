const sceneObject = ( state = {}, action ) => {
  switch ( action.type ) {
    case 'TOGGLE_SCENEOBJECT':
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    case 'SET_OBJECT_NAME':
      if ( state.id !== action.id ) {
        return state
      }

      return Object.assign({}, state, { name: state.name })

    default:
      return state
  }
}

const sceneObjects = ( state = [], action ) => {
  switch ( action.type ) {
    case 'TOGGLE_SCENEOBJECT':
      return state.map(t => sceneObject( t, action ))

    case 'SET_OBJECT_NAME':
      return state.map(t => sceneObject( t, action ))

    default:
      return state
  }
}

export default sceneObjects
