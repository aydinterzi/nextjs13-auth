import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link href="/">Logo</Link>
      <Link href="/login">Login</Link>
      <Link href="/panel">Panel</Link>
    </header>
  );
};

export default Header;
