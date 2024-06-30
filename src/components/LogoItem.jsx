const LogoItem = ({ className, icon: Icon }) => {
  return (
    <div
      className={`grid h-36 w-52 place-content-center rounded-lg text-8xl text-neutral-100 ${className}`}
    >
      <Icon />
    </div>
  );
};

export default LogoItem;
