import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">EventX</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-orange-500">Home</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-orange-500">Events</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">Contact</Link>
            </li>
            <li>
              <Link href="/Location" className="hover:text-orange-500">Contact</Link>
            </li>
          </ul>
        </nav>
        <Link href="/register" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          Register Now
        </Link>
      </div>
    </header>
  );
};

export default Header;