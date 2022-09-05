import React, { useState } from 'react';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import data from './data';


function App() {

    const [info, setInfo] = useState(0)
    
    const next = () => {
      setInfo(info + 1)
    }
    
    const previous = () => {
      setInfo(info- 1)
    }

  return (
    <div className='App'>
      <Header />
      <UserInfo {...data[info]} next={next} previous={previous}/>
    </div>
);
}

export default App;


