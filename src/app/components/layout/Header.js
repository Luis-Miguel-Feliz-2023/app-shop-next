import Link from "next/link";

export default function Header(){
    return(
    <header className="flex items-center justify-between">
        <Link className="text-blue-600 font-semibold text-2xl" href="">
      Ferreteria
      </Link>
      <nav className="flex items-center gap-8 text-gray-600 font-semibold">
        <Link href={''}>Home</Link>
        <Link href={''}>menu</Link>
        <Link href={''}>about</Link>
        <Link href={''}>contacto</Link>
        <Link href={''} className="bg-cyan-500 rounded-full text-white px-8 py-2">
        login
        </Link>
      </nav>

    </header>
    );
}