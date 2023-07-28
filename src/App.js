import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: `A blog is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos. Blogging has gained immense popularity due to its enjoyable and adaptable nature, allowing for self-expression and social connections. In addition, it serves as a platform for enhancing writing skills and promoting businesses.
      
      Furthermore, a professional blogger can even make money from blogging in various ways, such as Google ads and Amazon affiliate links. Successful blogs can cover any topic. No matter what subject you can think of, there’s likely already a profitable blog dedicated to it.
      
      If there is none, this is where you come in. New bloggers who can find a unique niche to create content about have a higher chance of surviving in the competitive blogging world. Preferably, you should be passionate about or an expert in your blog niche. However, don’t worry if you are having a difficult time pinning down a topic – this article will help you.
      
      In this article, we will explore 11 types of blogs in different niche industries, including tech, lifestyle, beauty and fashion, health and fitness, education, business and marketing, finance and investment, food, travel, photography, and art and design.
      
      We will include five of the best blog examples for each type, discuss each blog example briefly, and highlight what we can learn from the blog. We will also include the info on how it is build, for example, whether a CMS like WordPress was used or a blogging platform.`
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "He is the most intelligent comedian, his jokes are actual facts but satirical in natural. No words just amazing set piece 👏"
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "He is the most intelligent comedian, his jokes are actual facts but satirical in natural. No words just amazing set piece 👏"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "He is the most intelligent comedian, his jokes are actual facts but satirical in natural. No words just amazing set piece 👏"
    }
  ]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(post => 
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id,
      datetime,
      title: postTitle,
      body: postBody
    };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate("/");
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate("/");
  }

  return (
    <div className="App">
      <Header
        title={"React JS Blog"}
      />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={
          <Home
            posts={searchResults}
          />
        } />
        <Route path="/post" element={
          <NewPost 
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        } />
        <Route path="/post/:id" element={
          <PostPage
            posts={posts}
            handleDelete={handleDelete}
          />
        } />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;