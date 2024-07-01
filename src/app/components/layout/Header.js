import Link from "next/link";
// no se usa esto import RegisterPage from "next/register";

export default function Header(){
    return(
   <header className="flex items-center justify-between">
       
      <nav className="flex items-center gap-8 text-gray-600 font-semibold">
      <Link className="text-blue-600 font-semibold text-2xl" href="/">
      Ferreteria
      </Link>

        <Link href={'/'}>Home</Link>
        <Link href={''}>menu</Link>
        <Link href={''}>about</Link>
        <Link href={''}>contacto</Link>
        
      </nav>

      <nav className="flex items-center gap-4 text-gray-600 font-semibold">
        
        <Link href={'/login'} className="">
        Login
        </Link>

        <Link href={'/register'} className="bg-cyan-500 rounded-full text-white px-8 py-2">
        Register
        </Link>

      </nav>

    </header>
    );
}