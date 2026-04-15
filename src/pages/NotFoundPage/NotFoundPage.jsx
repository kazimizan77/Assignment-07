import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section className="bg-[#F0F4F3] min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[#1a2e1a] text-[80px] md:text-[120px] font-bold leading-none mb-4">
        404
      </h1>
      <h2 className="text-[#1a2e1a] text-[24px] md:text-[36px] font-bold mb-4">
        Oops! Page not found
      </h2>
      <p className="text-[#6B7280] text-[15px] md:text-[17px] max-w-[480px] mb-8">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#2D4A3E] text-white text-[15px] font-medium rounded-md hover:bg-[#1f3329] transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
