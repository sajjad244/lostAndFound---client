import {useState} from "react";

const faqs = [
  {
    question: "How do I post a lost item?",
    answer:
      "Log into your account and click on 'Post Lost Item' to provide details.",
  },
  {
    question: "What happens if someone finds my lost item?",
    answer:
      "They can contact you via the message or report option on your post.",
  },
  {
    question: "What should I do if I find something?",
    answer:
      "Use the 'Post Found Item' option and provide details so the owner can reach out.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 mb-16 px-4 md:px-16">
      <h2 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
