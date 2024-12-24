import axios from "axios";
import {useEffect, useState} from "react";
import Card from "./Card";
import {Link} from "react-router-dom";

const LostAndFound = () => {
  const [items, setItems] = useState([]);

  const fetchAllItems = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allItems`);
    setItems(data);
  };

  useEffect(() => {
    fetchAllItems();
  }, []);
  return (
    <div className="mx auto">
      <div className="text-center my-16">
        <h1 className="text-4xl font-bold text-teal-500">
          {" "}
          <span className="text-orange-500">Current</span> Lost & Found{" "}
          <span className="italic font-thin bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
            {" "}
            Items
          </span>
        </h1>
        <p className="text-gray-600 mt-2">
          Browse through the list of all lost and found items. Help others find
          their belongings or claim yours!
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 rounded-md my-10">
        {items.slice(0, 6).map((item) => (
          <Card item={item} key={item._id}></Card>
        ))}
      </div>
      <div className="my-5 px-8">
        <Link to="/allItems" className="btn">
          See all
        </Link>
      </div>
    </div>
  );
};

export default LostAndFound;
