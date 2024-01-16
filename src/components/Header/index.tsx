import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link href="/">
            <h2>
              <span>날씨</span> <span>앱</span>
            </h2>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
