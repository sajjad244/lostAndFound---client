export default function NewsletterSection() {
  return (
    <section className=" py-8 mb-16 px-4 md:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          📬{" "}
          <span className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
            Stay Updated!
          </span>
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to get the latest updates, features, and announcements.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
          />
          <button
            type="submit"
            className="btn btn-outline px-6 py-2 rounded-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
