import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-6xl sm:px-16 xl:px-48 dark:text-gray-400">
          Oops
        </div>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return (
      <>
        <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-6xl sm:px-16 xl:px-48 dark:text-gray-400">
          Oops
        </div>
        <div className="flex justify-center text-6xl text-red-500 pl-24">
          The page you visited does not exist!
        </div>
      </>
    );
  }
}
