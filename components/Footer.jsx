import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="wrapper flex flex-center flex-col flex-between gap-4 text-center p-5 sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/logo.png"
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
