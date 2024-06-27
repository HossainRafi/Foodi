export const Footer = () => {
  return (
    <div className="bg-gray-50">
      {/* top section */}
      <footer className="footer xl:px-24 py-10 px-4 text-base-content">
        <aside>
          <img src="/logo.png" />
          <p className="my-3 md:w-40">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav>
          <header className="footer-title text-black">Useful links</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header className="footer-title">Main Menu</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offers</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav>
        <nav>
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover">hossainrafi71@email.com</a>
          <a className="link link-hover">+64 958 248 966</a>
          <a className="link link-hover">Social Media</a>
        </nav>
      </footer>
    </div>
  );
};
