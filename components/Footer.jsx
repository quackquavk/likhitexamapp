import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bottom-0 w-full bg-white">
    <div className="wrapper flex items-center justify-between gap-4 text-center p-5">
      <Link href="/">
        <Image
          src="/images/logo.png"
          height={30}
          width={30}
          alt="logo"
        />
      </Link>
      <p>2024 Vows All Rights Reserved</p>
    </div>
  </footer>
  
  );
};

export default Footer;
