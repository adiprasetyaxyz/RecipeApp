import { useState } from "react";

export default function Search() {
  let [query, setQuery] = useState([]);
  return (
    <>
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
}
