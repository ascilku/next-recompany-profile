import ButtonMain from "../../components/button/buttonMain";
import HeaderUserMain from "../../components/headerUserMain";
import IconGroup from "../../components/svg/iconGroup";

const buttonHeros = [
  {
    href: "/daftar",
    title: "Daftar",
    color: "bg-btn-100",
    colorHover: "hover:bg-btnHover-100",
  },
  {
    href: "user/company-profile",
    title: "Coba demo gratis",
    color: "bg-btn-200",
    colorHover: "hover:bg-btnHover-200",
  },
];
function User() {
  return (
    <>
      <HeaderUserMain />
      <main>
        {/* Hero atau Banner */}
        <section>
          <div className="mx-[96px] max-lg:mx-[47px] max-sm:mx-4">
            <div className="my-[96px]">
              <div>
                <div className="mx-auto max-w-lg text-center">
                  <h2 className="text-3xl font-semibold leading-[40px] text-100">
                    Buat Company Profile Anda dengan mudah
                  </h2>
                  <span className="mt-4 block text-sm font-light text-100">
                    Dengan situs ini semua bisa membuat data dirinya dengan
                    lebih mudah dan dapat di jangkau dimanapun.
                  </span>
                  <div className="mt-12 space-x-4 max-sm:hidden">
                    {buttonHeros.map((button, index) => (
                      <ButtonMain
                        href={button.href}
                        title={button.title}
                        color={button.color}
                        colorHover={button.colorHover}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-6 space-x-4">
              <div className="max-lg:grid-cols-3 max-sm:space-y-2 sm:flex sm:flex-row sm:justify-between">
                <div className="flex flex-row justify-center space-x-2">
                  <IconGroup className="h-5 w-5" />
                  <span className="text-sm font-light">0 + pengunjung</span>
                </div>
                <div className="flex flex-row justify-center space-x-2">
                  <IconGroup className="h-5 w-5" />
                  <span className="text-sm font-light">0 + Pendaftar</span>
                </div>
                <div className="flex flex-row justify-center space-x-2">
                  <IconGroup className="h-5 w-5" />
                  <span className="text-sm font-light">0 + Langganan</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tentang Kami */}
        <section>
          <div className="bg-100 py-12">
            <div className="mx-[96px] max-lg:mx-[47px] max-sm:mx-4">
              <div>
                <div className="mx-auto max-w-lg text-center">
                  <h2 className="text-3xl font-normal text-text-judulSection">
                    Company Profile dengan berbagai keunggulannya
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-8 text-center">
                <div className="">
                  <h3 className="font- text-sm font-normal text-btn-100">
                    Digital
                  </h3>
                  <p className="text-xs font-light leading-6 text-text-p">
                    Dapat di akses dimana saja
                  </p>
                </div>
                <div className="">
                  <h3 className="text-sm font-normal text-btn-100">Public</h3>
                  <p className="text-xs font-light leading-6 text-text-p">
                    Dapat di akses dimana saja
                  </p>
                </div>
                <div className="">
                  <h3 className="text-sm font-normal text-btn-100">Simpel</h3>
                  <p className="text-xs font-light leading-6 text-text-p">
                    Dapat di akses dimana saja
                  </p>
                </div>
                <div className="">
                  <h3 className="text-sm font-normal text-btn-100">
                    Super Cepat
                  </h3>
                  <p className="text-xs font-light leading-6 text-text-p">
                    Dapat di akses dimana saja
                  </p>
                </div>
              </div>
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

export default User;
