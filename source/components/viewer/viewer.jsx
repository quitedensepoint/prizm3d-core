import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import SceneObject from '../scene-object/scene-object.jsx';
import { connect } from 'react-redux'

class Viewer extends React.Component {
  constructor( props, context ) {
    super( props, context );

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3( 0, 0, 10 );

    this.sceneObjects = props.sceneObjects
      ? props.sceneObjects
      : [ ];

    this.state = {
      cubeRotation: new THREE.Euler( )
    };

    this._onAnimate = ( ) => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      /*
      this.setState({
        cubeRotation: new THREE.Euler( this.state.cubeRotation.x + 0.1, this.state.cubeRotation.y + 0.1, 0 )
      })
      */
    };
  }

  render( ) {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    this.sceneObjects = this.sceneObjects.map(( sceneObject, index ) => {
      return <SceneObject width={sceneObject.width} height={sceneObject.height} depth={sceneObject.depth} id={index}/>
    });

    return (
      <React3 mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
  width={width} height={height} onAnimate={this._onAnimate}>
        <scene>
          <perspectiveCamera name="camera" fov={75} aspect={width / height} near={0.1} far={1000} position={this.cameraPosition}/>
          <group>
            {this.sceneObjects}
          </group>
        </scene>
      </React3>
    );
  }
}

const mapStateToProps = ( state ) => {
  return state
}

export default connect( mapStateToProps )( Viewer )
