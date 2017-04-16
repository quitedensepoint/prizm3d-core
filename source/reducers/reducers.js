import { combineReducers } from 'redux'
import sceneObjects from './sceneObjects.js'
import visibilityFilter from './visibilityFilter.js'

const scene = combineReducers({
  sceneObjects,
  visibilityFilter
})

export default scene
