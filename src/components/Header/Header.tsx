import Image from "next/image";

function Header() {
  return (
    <header className="w-full h-24 shadow-lg fixed top-0 z-10 flex items-center justify-center">
      <Image
        alt="EasyPlay logo"
        src="/easyplay_logo.png"
        width="220"
        height="80"
      />
    </header>
  );
}

export default Header;
