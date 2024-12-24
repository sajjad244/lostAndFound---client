const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Add Item",
      description:
        "Register your lost or found item with detailed information.",
      icon: "📋",
    },
    {
      id: 2,
      title: "Search Items",
      description: "Browse through the list of reported items to find a match.",
      icon: "🔍",
    },
    {
      id: 3,
      title: "Contact Owner",
      description: "Reach out to the item owner or finder to reclaim it.",
      icon: "📞",
    },
  ];

  return (
    <section className="how-it-works py-8 mb-16">
      <h2 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center bg-white p-4 shadow-md rounded-md"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
