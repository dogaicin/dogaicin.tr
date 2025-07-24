'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="w-full flex justify-center fixed top-6 z-50">
            <nav className="backdrop-blur-md bg-white/70 border border-gray-300/30 shadow-md rounded-xl px-6 py-3 flex items-center gap-6 text-sm text-gray-800 font-medium">
                <div className="flex items-center gap-3">
                    <Image
                        src="/assets/dogaicin-ikon.svg"
                        alt="dogaicin logo"
                        width={28}
                        height={28}
                        className="select-none"
                    />
                    <div className="w-px h-6 bg-gray-300" />
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/">Ana Sayfa</Link>
                    <Link href="/harita">Harita</Link>
                    <Link href="/rehber">Rehber</Link>
                    <Link href="/forum">Forum</Link>
                    <Link href="/blog">Blog</Link>
                </div>
            </nav>
        </header>
    );
}
