import "./app.style.scss";
import { useState, useEffect } from "react";
import { getPosts } from "./Api/api";

import { ListPage } from "./ListPage";
import { SearchBar } from "./SearchBar";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => setSearchResults(json));
  }, []);

  return (
    <main className="">
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </main>
  );
}

export default App;
