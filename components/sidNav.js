// components/SideNav.js

import Link from 'next/link';

const SideNav = () => {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </li>
        {/* Add more items as needed */}
      </ul>
    </nav>
  );
};

export default SideNav;
