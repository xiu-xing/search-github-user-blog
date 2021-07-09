import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'urql';

function App() {
  // const [result, setC] = useQuery({
  //   query: `
  //   query{ 
  //     viewer { 
  //       login
  //     }
  //   }
  //   `
  // })
  // const [res,setV] = useViewerQuery({
  //   variables:{}
  // })
  // useEffect(() => {
  //     console.log(res);
  // }, [res])
  return (
    <div className="App">
      <h1>Hello My Project</h1>
    </div>
  );
}

export default App;
