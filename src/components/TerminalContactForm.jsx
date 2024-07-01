const TerminalContactForm = () => {
  return (
    <form className="h-full w-full">
      <div className="flex h-10 w-full items-center rounded-t-lg bg-dark-blue px-4">
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <h2 className="flex w-full items-center justify-center text-sm text-gray-100">
          Contact@Kiran
        </h2>
      </div>
      <div className="h-full min-h-96 w-full rounded-b-lg bg-dark-blue bg-opacity-60 backdrop-blur-lg backdrop-filter">

        
      </div>
    </form>
  );
};

export default TerminalContactForm;
