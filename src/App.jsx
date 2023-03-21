import React  from 'react';
import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Home from '../src/Pages/Home/home';
import Form from './components/Form/form';
// import Home from './src/Pages/Home/home';



function App(){
  return(
    <div className="main-principal">
        <Header/>
        <Main/>
        <Form user={{name: "Denise",
        email: "denise_liima@hotmail.com",
        }}/>
        <Footer/> 
        <Home/>
    </div>
  );
}

export default App;
