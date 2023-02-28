import { useState } from "react";
import ArticleList from "./Components/Components/ArticleList/ArticleList";
import SearchBar from "./Components/Components/SearchBar/SearchBar";

function App() {
  const [articleList, setArticleList] = useState([]);

  return (
    <div className="App">
      <h1 className="header">Search Wikipedia</h1>
      <SearchBar setArticleList={setArticleList} />
      <ArticleList articleList={articleList} />
    </div>
  );
}

export default App;
