const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container flex justify-around">
        <div className="text-left">
          <span className="text-xl font-bold text-white">Inmobalize</span>
          <a className="block mt-2">Home</a>
          <a className="block mt-2">Legal</a>
          <a className="block mt-2">About</a>
        </div>
        <div className="text-left">
          <span className="text-xl font-bold text-white">Descubre</span>
          <a className="block mt-2">FAQ</a>
          <a className="block mt-2">Podcast</a>
          <a className="block mt-2">Blog</a>
        </div>
        <div className="text-left">
          <span className="text-xl font-bold text-white">Legal</span>
          <a className="block mt-2">Cookies</a>
          <a className="block mt-2">Ethical</a>
          <a className="block mt-2">Términos y condiciones</a>
          <a className="block mt-2">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
