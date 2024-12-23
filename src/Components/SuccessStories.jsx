const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "Lost Wallet Found",
      description:
        "Thanks to this platform, I was able to find my lost wallet within two days!",
      image: "https://via.placeholder.com/150",
      user: "John Doe",
    },
    {
      id: 2,
      title: "Reunited with Pet",
      description:
        "This site helped me locate my missing cat. Forever grateful!",
      image: "https://via.placeholder.com/150",
      user: "Jane Smith",
    },
  ];

  return (
    <section className="success-stories py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="card  shadow-md p-4 rounded-md">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
            <p className="text-gray-600 mb-2">{story.description}</p>
            <p className="text-sm text-gray-500">- {story.user}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
