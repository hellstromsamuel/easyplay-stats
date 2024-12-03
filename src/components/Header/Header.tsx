import Image from "next/image";

function Header() {
  return (
    <header className="w-full h-20 fixed top-0 z-10 flex items-center justify-center">
      <Image
        alt="EasyPlay logo"
        src="/easyplay_logo.png"
        width="200"
        height="80"
      />
    </header>
  );
}

export default Header;
