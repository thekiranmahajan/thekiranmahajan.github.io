const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto flex h-64 w-full flex-col items-center bg-black text-white">
      <div className="mb-20 mt-auto flex w-full items-center justify-center text-sm text-gray-400">
        &copy; Kiran Mahajan. All Rights Reserved {year}
      </div>
    </footer>
  );
};

export default Footer;
