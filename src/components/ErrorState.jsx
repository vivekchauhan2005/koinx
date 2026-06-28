import { MdErrorOutline } from "react-icons/md";

function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <MdErrorOutline className="text-danger text-6xl mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Something went wrong</h3>
      <p className="text-gray-500 mb-6 max-w-sm">{message}</p>
      <button
        onClick={onRetry}
        className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}

export default ErrorState;
