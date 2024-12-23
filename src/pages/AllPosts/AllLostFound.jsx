import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../../Components/Card";

const AllLostFound = () => {
  const [items, setItems] = useState([]);

  const fetchAllItems = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allItems`);
    setItems(data);
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div className=" mx-auto">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-teal-500">
          All Lost & Found Items
        </h1>
        <p className="text-gray-600 mt-2">
          Browse through the list of all lost and found items. Help others find
          their belongings or claim yours!
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 rounded-md">
        {items.map((item) => (
          <Card item={item} key={item._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllLostFound;
