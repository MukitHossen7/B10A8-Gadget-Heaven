import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <h1 className="font-bold text-7xl text-[#9538E2] pb-5">Oops!!</h1>
      <div>
        {error && (
          <div className="space-y-2">
            <p className="text-xl text-gray-600 font-semibold ">
              Sorry, an unexpected error has occurred.
            </p>
            <p className="text-lg text-slate-600 font-medium">
              Error: {error.message || "Unknown error"}
            </p>

            {error.status && (
              <p className="font-bold text-2xl">Not Found : {error.status}</p>
            )}
          </div>
        )}
      </div>
      <button
        onClick={handleGoHome}
        className="bg-[#9538E2] btn text-white hover:bg-[#9538E2] mt-4"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
