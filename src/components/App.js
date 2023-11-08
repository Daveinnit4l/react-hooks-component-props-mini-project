import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";
import logo from "../assets/logo";

function App() {
  return (
    <div className="App">
      <Header blogName="Underreact"/>
      <About  imageSrc= {logo}aboutText="A blog about learning React"/>

      <ArticleList posts={blogData.posts} />
      
    </div>
  );
}

export default App;