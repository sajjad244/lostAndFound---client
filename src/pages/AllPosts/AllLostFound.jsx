import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../../Components/Card";

const AllLostFound = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  useEffect(() => {
    const fetchAllItems = async () => {
      const {data} = await axios.get(
        `${import.meta.env.VITE_API_URL}/allItems?search=${search}` //${search} jodi thake tahole tai ? use kora hoiche aro kichu add korete caile just & use korbo
      );
      setItems(data);
    };
    fetchAllItems();
  }, [search]);

  const handleSort = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title); // Sort by title (ascending)
      } else {
        return b.title.localeCompare(a.title); // Sort by title (descending)
      }
    });
    setItems(sortedItems);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <div className="mx-auto">
      {/* Search field */}
      <div className="p-5 max-w-md mx-auto font-sans flex gap-3">
        <input
          type="text"
          onBlur={(e) => setSearch(e.target.value)}
          placeholder="Search by title or location..."
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="button"
          value="Search"
          className="btn btn-square text-sm"
        />
      </div>

      {/* Sort button */}
      <div className="text-center my-4">
        <button
          onClick={handleSort}
          className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
        >
          Sort ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Header */}
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-teal-500">
          All Lost & Found Items
        </h1>
        <p className="text-gray-600 mt-2">
          Browse through the list of all lost and found items. Help others find
          their belongings or claim yours!
        </p>
      </div>

      {/* Items grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 rounded-md">
        {items.map((item) => (
          <Card item={item} key={item._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllLostFound;
