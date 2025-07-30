const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-brand-primary border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;