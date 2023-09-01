const Header: React.FC = () => {
  return (
    <header className="p-10 text-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">INMOBALIZE</div>
        <div>
          <ul className="flex space-x-4">
          <li className="hover:underline cursor-pointer">Log in</li>
            <li className="hover:underline cursor-pointer">Register</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
