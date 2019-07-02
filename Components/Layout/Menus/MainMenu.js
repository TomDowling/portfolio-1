import Link from "next/link";

export default () => (
  <ul className="navbar-nav ml-auto text-center">
    <li className="nav-item">
      <Link href="#lorem-ipsum">
        <a className="nav-link">Lorem Ipsum</a>
      </Link>
    </li>
  </ul>
);
