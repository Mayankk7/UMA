import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Form from './components/AdderCard';
import HomeScreen from './components/HomeScreen';
import usersData from './dummydata';
import { useEffect } from 'react';

// bg-[#03178A] for other uses
function App() {
  useEffect(()=>{
    console.log(usersData.users);
  })
  return (
    <div className="App h-[100vh] bg-[#222222] ">
      <div>
      <div className=' pb-4 h-fit '>
        <p className='text-left text-white ml-[5vw] underline mt-[5vh] overflow-hidden capitalize font-roboto text-3xl font-light '>user management system</p>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
      </Routes>
    </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
