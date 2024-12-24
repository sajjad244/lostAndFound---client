import {useContext, useState} from "react";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

const UpdatePage = () => {
  const {user} = useContext(AuthContext);
  const {id} = useParams();
  const data = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const form = e.target;
    const title = form.title.value;
    const PostType = form.postType.value;
    const imageURL = form.imageURL.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const date = startDate.toISOString().slice(0, 10);
    const email = form.email.value;
    const name = form.name.value;
    const userPhoto = user?.photoURL;

    const formData = {
      title,
      PostType,
      imageURL,
      description,
      category,
      location,
      email,
      name,
      date,
      userPhoto,
    };

    //? make a put req for updating items {using axios for fetch}

    const {data} = await axios.put(
      `${import.meta.env.VITE_API_URL}/updateItem/${id}`,
      formData
    );
    if (data) {
      toast.success("Post Update Successfully");
      navigate("/myItems");
      form.reset();
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-600">
        Update Lost & Found Item
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Post Type Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Post Type</label>
          <select
            defaultValue={data.PostType}
            name="postType"
            className="w-full p-2 border rounded"
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>
        </div>
        {/* Image/Thumbnail */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Thumbnail</label>
          <input
            type="url"
            name="imageURL"
            defaultValue={data.imageURL}
            required
            placeholder="Enter Image URL"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* post Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Post Title</label>
          <input
            type="text"
            required
            defaultValue={data.title}
            name="title"
            placeholder="Enter Campaign Title"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={data.description}
            rows="4"
            placeholder="Enter Campaign Description"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            defaultValue={data.category}
            className="w-full p-2 border rounded"
            name="category"
          >
            <option value="pets">Pets</option>
            <option value="documents">Documents</option>
            <option value="gadgets">Gadgets</option>
          </select>
        </div>
        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={data.location}
            className="w-full p-2 border rounded"
            placeholder="Enter location"
          />
        </div>
        {/* Date Picker */}
        <div>
          <label className="block mb-1 font-medium">Date Lost/Found</label>
          <DatePicker
            className="w-full p-2 border rounded"
            defaultValue={data.date}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        {/* User Email (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">User Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email || ""}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-200"
          />
        </div>

        {/* User Name (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName || ""}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-200"
          />
        </div>

        {/* Add Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
