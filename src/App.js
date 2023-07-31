import React from 'react';
import Header from './MainPage/Header';
import Nav from './MainPage/Nav';
import Footer from './MainPage/Footer';
import Home from './MainPage/HomePage/Home';
import NewPost from './MainPage/NewPost';
import EditPost from './MainPage/EditPost';
import PostPage from './MainPage/PostPage';
import About from './AboutPage/About';
import Missing from './MissingPage/Missing';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';


function App() {

  return (
    <div className="App">
      <Header title={"React JS Blog"}/>
      <DataProvider>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post" element={<NewPost/>}/>
          <Route path="/edit/:id" element={<EditPost/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;