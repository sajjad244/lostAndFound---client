import {useContext, useEffect, useState} from "react";
import AuthContext from "../../Provider/AuthContext";
import axios from "axios";

const RecoveredItems = () => {
  const {user} = useContext(AuthContext);
  const [items, setItems] = useState([]);

  console.log(user.email);

  useEffect(() => {
    const fetchMyItems = async () => {
      if (user?.email) {
        try {
          const {data} = await axios.get(
            `${import.meta.env.VITE_API_URL}/allRecovered/${user.email}`
          );
          setItems(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchMyItems();
  }, [user?.email]);

  console.log(items);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
        All Recovered
      </h1>
      {/* conditional data showing */}
      {items.length === 0 ? (
        <p className="text-center text-gray-500">
          No RecoveredDate found. Start by adding a RecoveredDate!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">RecoveredDate</th>
              </tr>
            </thead>
            <tbody>
              {items.map((post, index) => (
                <tr key={post._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{post.item.title}</td>

                  <td
                    className={`py-2 px-4 badge mt-2 font-semibold rounded-full ${
                      post.PostType === "Found"
                        ? "text-green-500 bg-green-200 "
                        : "text-red-500 bg-red-200"
                    }`}
                  >
                    {post.item.PostType}
                  </td>

                  <td className="py-2 px-4">{post.item.location}</td>
                  <td className="py-2 px-4">{post.recoveredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecoveredItems;
