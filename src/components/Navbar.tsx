export default function Navbar() {
  return (
    <div className="absolute w-full">
      <nav className="flex justify-between items-center py-3 px-5">
        <h4>EinJOJO</h4>
        <ul className="inline">
          <li>WWW</li>
          <li>
            <a href={'/'}>Link</a>
          </li>
          <li>
            <a href={'/'}>Link</a>
          </li>
          <li>
            <a href={'/'}>Link</a>
          </li>
        </ul>
        <button className="burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  );
}
