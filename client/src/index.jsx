import React from 'react';
import ReactDOM from 'react-dom';


// ReactDOM.render(
//   <div>
//     <h1>Hello, world!</h1>
//     <h2>Goodbye, world!</h2>
//   </div>,
//   document.getElementById('app')
// );

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>Goodbye, World!</h2>
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;