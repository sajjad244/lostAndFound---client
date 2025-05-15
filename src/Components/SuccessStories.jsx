import {motion} from "framer-motion";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "Lost Wallet Found",
      description:
        "Thanks to this platform, I was able to find my lost wallet within two days!",
      image:
        "https://i.ibb.co.com/VW3n1F8/dream-about-wallet-lost-and-found.webp",
      user: "John Doe",
    },
    {
      id: 2,
      title: "Reunited with Pet",
      description:
        "This site helped me locate my missing cat. Forever grateful!",
      image: "https://i.ibb.co.com/GV80pQ4/lost-cat.jpg",
      user: "Jane Smith",
    },
  ];

  return (
    <section className="success-stories py-8 my-10">
      <h2 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            className="card shadow-md p-4 rounded-md"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            <motion.img
              src={story.image}
              alt={story.title}
              className="w-full h-40 object-cover rounded-md mb-4"
              animate={{
                x: ["0%", "50%", "0%"],
              }}
              transition={{
                duration: 10,
                ease: "circIn",
                loop: Infinity,
              }}
            />
            <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
            <p className="text-gray-600 mb-2">{story.description}</p>
            <p className="text-sm text-gray-500">- {story.user}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
