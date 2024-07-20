import Link from "next/link";
interface ButtonComponent {
  href: string;
  title: string;
  color: string;
  colorHover: string;
}
function ButtonMain(props: ButtonComponent) {
  return (
    <Link href={props.href}>
      <button
        className={`rounded-[4px] ${props.color} px-5 py-2 text-xs font-medium leading-6 ${props.colorHover} `}
      >
        {props.title}
      </button>
    </Link>
  );
}

export default ButtonMain;
