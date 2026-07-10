function SearchBar({ search, setSearch }) {

    return (

        <input
            type="text"
            placeholder="🔍 Search Tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500"
        />

    );
}

export default SearchBar;