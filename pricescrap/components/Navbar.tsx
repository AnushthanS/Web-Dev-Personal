import Link from "next/link";
import Image from "next/image";

const navIcons = [
  {
    alt: "heart",
    src: "/assets/icons/black-heart.svg",
  },
  {
    alt: "search",
    src: "/assets/icons/search.svg",
  },
  {
    alt: "user",
    src: "/assets/icons/user.svg",
  },
];


const Navbar = () => {
  return (
    <header className="w-full">
        <nav className="nav">
          <Link href='/' className="flex items-center gap-1">
            <Image src="/assets/icons/logo.svg" alt="logo" width={27} height={27} />
            Price<span className="text-primary">Scrap</span>
          </Link>

          <div className="flex items-center gap-5">
            {navIcons.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className="object-contain"
              /> ))}
          </div>
        </nav>
    </header>
  )
}

export default Navbar;