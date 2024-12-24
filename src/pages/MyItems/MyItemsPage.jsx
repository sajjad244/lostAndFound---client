import axios from "axios";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../Provider/AuthContext";
import {FaArrowUpFromGroundWater, FaDeleteLeft} from "react-icons/fa6";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

const MyItemsPage = () => {
  const {user} = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMyItems = async () => {
      if (user?.email) {
        try {
          const {data} = await axios.get(
            `${import.meta.env.VITE_API_URL}/myItems/${user.email}`
          );
          setItems(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchMyItems();
  }, [user?.email]);

  // ! delete user post from database

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/myItems/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setItems(items.filter((item) => item._id !== id));
            }
          })
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
        My Posts
      </h1>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">
          No posts found. Start by adding a new post!
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
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((post, index) => (
                <tr key={post._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{post.title}</td>

                  <td
                    className={`py-2 px-4 badge mt-2 font-semibold rounded-full ${
                      post.PostType === "Found"
                        ? "text-green-500 bg-green-200 "
                        : "text-red-500 bg-red-200"
                    }`}
                  >
                    {post.PostType} item
                  </td>

                  <td className="py-2 px-4">{post.location}</td>
                  <td className="py-2 px-4">
                    <Link
                      to={`/updatePost/${post._id}`}
                      className="btn btn-xs btn-info mr-2"
                    >
                      <FaArrowUpFromGroundWater></FaArrowUpFromGroundWater>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="btn btn-xs btn-error"
                    >
                      <FaDeleteLeft></FaDeleteLeft>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyItemsPage;
