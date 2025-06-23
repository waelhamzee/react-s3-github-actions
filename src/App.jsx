import "./index.css";

export default function AwsS3Deployed() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-800 flex flex-col items-center justify-center px-6 py-12 text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl max-w-xl w-full p-10 text-center">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          Deployed by AWS
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-md mx-auto leading-relaxed">
          This React application is{" "}
          <span className="font-semibold underline decoration-pink-500 decoration-4">
            hosted and served
          </span>{" "}
          using AWS S3 static site hosting, providing a fast, secure, and
          scalable way to deliver your site worldwide.
        </p>

        <div className="inline-flex items-center gap-4 bg-white bg-opacity-20 rounded-xl py-4 px-8 shadow-md hover:bg-opacity-30 transition cursor-default">
          <svg
            className="w-12 h-12 text-yellow-400 animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 16.5V11H8.5l4.5-5 4.5 5H13v5.5h-2z" />
          </svg>
          <div className="text-left">
            <p className="text-xl font-semibold">AWS S3 Static Hosting</p>
            <p className="text-sm opacity-80 max-w-xs">
              Effortless, reliable, and cost-effective static site deployment on
              Amazon S3.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-sm opacity-60">Powered by AWS.</footer>
    </div>
  );
}
