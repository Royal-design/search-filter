import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = ({ setSearchResults, posts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);
    const results = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );
    setSearchResults(results);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="search"
        onChange={handleChange}
      />
      <button className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};
