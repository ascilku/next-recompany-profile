import Link from "next/link";
import IconMain from "./svg/iconMain";
import ButtonMain from "./button/buttonMain";
import BurgerBar from "./svg/burgerBar";

const menus = [
  { href: "/home", text: "Home" },
  { href: "/product", text: "product" },
  { href: "/contact", text: "contact" },
];

const buttonMenus = [
  {
    href: "/daftar",
    title: "Daftar",
    color: "bg-btn-100",
    colorHover: "hover:bg-btnHover-100",
  },
  {
    href: "masuk",
    title: "Masuk",
    color: "bg-btn-200",
    colorHover: "hover:bg-btnHover-200",
  },
];
function HeaderUserMain() {
  return (
    <>
      <header>
        <div>
          <div className="mx-[96px] my-4 flex flex-row justify-between max-lg:mx-[47px] max-sm:mx-4">
            <div className="flex flex-row items-center space-x-8">
              <div>
                <Link href="/">
                  <IconMain />
                </Link>
              </div>
              <nav className="max-md:hidden">
                <ul className="font- flex flex-row">
                  {menus.map((menu, index) => (
                    <li className="text-text-menu" key={index}>
                      <Link href="" className="mx-4 block text-sm font-normal">
                        {menu.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex flex-row items-center max-md:space-x-2">
              <div className="flex flex-row space-x-4 max-sm:hidden">
                {buttonMenus.map((button, index) => (
                  <ButtonMain
                    href={button.href}
                    title={button.title}
                    color={button.color}
                    colorHover={button.colorHover}
                  />
                ))}
              </div>
              <Link
                href=""
                className="hover: hidden px-2 py-2 hover:bg-btnHover-200 max-md:block"
              >
                <BurgerBar />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderUserMain;
