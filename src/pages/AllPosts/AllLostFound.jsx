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

  console.log(items);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 rounded-md ">
      {items.map((item) => (
        <Card item={item} key={item._id}></Card>
      ))}
    </div>
  );
};

export default AllLostFound;
