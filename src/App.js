import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  const [ mode, setMode]=useState('light'); //Wether dark mode is enable or not
  
  const [ alert, setAlert]=useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      },1500)
  }

  const bg1 = () =>{
    document.body.style.backgroundColor="grey";
  }

  const bg2 = () =>{
    document.body.style.backgroundColor="cyan";
  }

  const bg3 = () =>{
    document.body.style.backgroundColor="green";
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode has been Enabled","success");
      // document.title='TextUtils- Dark Mode';
      // setInterval(() =>{
      //   document.title = 'TextUtils is Amazing'
      // },2000);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode has been Enabled","success");
      // document.title='TextUtils- Light Mode';
    }
  }


  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}  bg1={bg1} bg2={bg2} bg3={bg3}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        {/* <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />}/>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
