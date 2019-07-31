import React, { Component } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import './Components.css';

class SignUp extends Component {

	constructor() {
	    super();

		//path is relative to index.js
	    this.unityContent = new UnityContent(
	      "Build/webBuild.json",
	      "Build/UnityLoader.js",
		  { adjustOnWindowResize: true }
	    );

	  }

	render() {
		return(<Unity unityContent={this.unityContent} />);
	}
}


export default SignUp;
