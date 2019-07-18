import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class App extends React.Component {

  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto ' + dataUri);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
      </div>
    );
  }
};

export default App;
