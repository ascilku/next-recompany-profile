import BurgerBar from "@/app/components/svg/burgerBar";
import IconMain from "@/app/components/svg/iconMain";
import ImageBgLeft from "@/app/components/svg/imageBgLeft";
import ImageBgRight from "@/app/components/svg/imageBgRight";
import Instagram from "@/app/components/svg/instagram";
import Tiktok from "@/app/components/svg/tiktok";
import Link from "next/link";
const menus = [
  { title: "home", href: "/home" },
  { title: "about", href: "#about" },
  { title: "contact", href: "/contact" },
];
const icons = [
  { href: "https://www.tiktok.com/", icon: Tiktok },
  { href: "https://www.instagram.com/", icon: Instagram },
];
function UserSub() {
  return (
    <>
      <div className="relative flex justify-end">
        <div className="absolute">
          <ImageBgRight />
        </div>
      </div>
      <header>
        <div className="flex flex-row justify-between px-[96px] py-4 max-md:px-11">
          <div className="flex max-w-96 flex-row space-x-6">
            <Link
              href={`company-profile`}
              className="flex flex-row items-center space-x-4 text-sm font-normal"
            >
              <div className="flex flex-row items-center space-x-4">
                <img
                  src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-base font-semibold leading-[160%]">
                  It's me
                </span>
              </div>
            </Link>
            <nav className="flex items-center">
              <ul className="flex flex-row space-x-2 max-md:hidden">
                {menus.map((menu, index) => (
                  <li className="block px-3 py-2 text-sm font-light">
                    <Link href={menu.href}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-row items-center space-x-6">
            {icons.map((icon, index) => (
              <Link href={icon.href} className="max-md:hidden">
                <icon.icon />
              </Link>
            ))}
            <div className="flex md:hidden">
              <button>
                <BurgerBar />
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* hero */}
        <section>
          <div className="mt-12 flex flex-row space-x-80 px-[96px] max-md:px-11">
            <div className="text-7xl font-light">
              <h3>Lorem Ipsum is simply dummy text</h3>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-base font-light">
                with me <span className="text-colorCV-200">arif iskandar</span>,
                a software developer who loves to share how to code in many
                programing languages and multi platforms.
              </p>
              <Link href="">
                <button className="bg-colorCV-200 mt-8 rounded-full border px-6 py-2 text-sm font-light leading-[160%] text-btn-200">
                  Download CV
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* portfolio atau projects */}
        <section className="mt-14">
          <div className="mx-[96px] max-md:px-11">
            <div className="grid grid-cols-3 gap-9">
              <div className="border-colorCV-200 flex flex-col rounded-[32px] border border-dashed px-4 pt-4">
                <img
                  src="/image/image.png"
                  alt=""
                  className="h-full w-full rounded-[17px]"
                />
                <div className="mb-4">
                  <div className="pl-4 pt-4">
                    <h3 className="text-2xl font-medium">Title</h3>
                    <span className="mt-2 block pb-2 text-sm font-light">
                      Keterangan
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-colorCV-200 flex flex-col rounded-[32px] border border-dashed px-4 pt-4">
                <img
                  src="/image/image.png"
                  alt=""
                  className="h-full w-full rounded-[17px]"
                />
                <div className="mb-4">
                  <div className="pl-4 pt-4">
                    <h3 className="text-2xl font-medium">Title</h3>
                    <span className="mt-2 block pb-2 text-sm font-light">
                      Keterangan
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-colorCV-200 flex flex-col rounded-[32px] border border-dashed px-4 pt-4">
                <img
                  src="/image/image.png"
                  alt=""
                  className="h-full w-full rounded-[17px]"
                />
                <div className="mb-4">
                  <div className="pl-4 pt-4">
                    <h3 className="text-2xl font-medium">Title</h3>
                    <span className="mt-2 block pb-2 text-sm font-light">
                      Keterangan
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-colorCV-200 flex flex-col rounded-[32px] border border-dashed px-4 pt-4">
                <img
                  src="/image/image.png"
                  alt=""
                  className="h-full w-full rounded-[17px]"
                />
                <div className="mb-4">
                  <div className="pl-4 pt-4">
                    <h3 className="text-2xl font-medium">Title</h3>
                    <span className="mt-2 block pb-2 text-sm font-light">
                      Keterangan
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="" className="mt-9 flex justify-center">
              <button className="border-colorCV-200 rounded-full border px-6 py-2 text-sm font-light">
                Load more
              </button>
            </Link>
          </div>
        </section>
        {/* tentang */}
        <div>
          <div className="absolute">
            <ImageBgLeft className="" />
          </div>
        </div>
        <section id="about">
          <div className="px-[96px] pt-[96px]">
            <div className="flex flex-row justify-between">
              <div>
                <div className="flex flex-row items-center space-x-5">
                  <h3 className="text-7xl font-light">It's me</h3>
                  <img
                    src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-7xl font-light">Arif Iskandar</h3>
              </div>
              <span className="max-w-[390px] text-base font-light leading-[160%]">
                I like to code and keep it simple, try something new, and learn
                more. I think sharing knowledge is the best practice to improve
                my skills, and I try to do it. I am currently the Chief
                Technology Officer at dSociety, a startup to help students
                prepare for their exams. I like to code and keep it simple, try
                something new, and learn more. I think sharing knowledge is the
                best practice to improve my skills, and I try to do it. I am
                currently the Chief Technology Officer at dSociety, a startup to
                help students prepare for their exams.
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="mx-[96px] mb-6 max-lg:mx-[47px] max-sm:mx-4">
          <hr className="my-12" />
          <div className="max-md:flex max-md:flex-col max-md:items-center max-md:space-y-2">
            <img
              src="/image/resauce.png"
              alt="Resauce Logo"
              className="mb-3 w-[106px]"
            />

            {/* <span>res</span> */}
            <div className="">
              <div className="flex flex-row justify-between text-xs font-extralight text-text-copyFooter max-md:flex-col max-md:items-center max-md:space-y-3">
                <div> &copy; 2024 - resauce.id</div>
                <div>
                  More than a company profile. is a part of
                  fe-company-profile.id product system
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default UserSub;
