const LogoItem = ({ children, className }) => {
  return (
    <div
      className={`grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-8xl text-neutral-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default LogoItem;
