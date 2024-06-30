const ArrowButtonSpan = ({ className }) => {
  return (
    <span
      aria-hidden="true"
      className={`absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform transition-transform group-hover:scale-x-100 ${className}`}
    ></span>
  );
};

export default ArrowButtonSpan;
