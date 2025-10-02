import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-1/2 mx-auto">
            <ul className="flex justify-between">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
            </ul>
        </nav>
    )
}