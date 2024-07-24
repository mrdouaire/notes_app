import React from "react";
import Heading from "./Heading";

function App() {
  const [ color, setColor ] = React.useState( 'black' );

  return (
    <div>
      <Heading title="To-Do App" color={ color }/>
      <button
        onClick={ () => {
          const colors = [
            'blue',
            'red',
            'green',
            'yellow'
          ];
          const i = Math.floor(Math.random() * colors.length);
          const selected = colors[ i ];
          setColor( selected );
        } }
      >
        Change Title Cover
      </button>
    </div>
  );
}

export default App;
