import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full border-b bg-white">
            <nav className="mx-auto max-w-4xl px-6 py-4 flex gap-8 text-gray-800">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/concerts" className="hover:underline">Concerts</Link>
            </nav>
        </header>
    )
}

export default Header
