'use client';

import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';

export default function CallToAction() {
    return (
        <section className="bg-[#f8f9fa] px-6 py-20 pt-3">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                    <FaLeaf className="text-3xl text-[#0F6220]" />
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
                    Bu yolda yalnız yürümek istemiyoruz.
                </h2>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                    Eğer sen de doğaya karşı sorumluluk hissediyorsan,
                    gönüllü sistemimize göz atabilir, destek olabileceğin alanlarda bizimle yol alabilirsin.
                </p>

                <Link
                    href="/bize-katil"
                    className="inline-block bg-white shadow-sm text-[#1A5D1A] px-6 py-3 rounded-xl font-medium border border-gray-100 hover:shadow-md hover:bg-[#f5f5f5] transition">
                    Bize Katıl
                </Link>
            </div>
        </section>
    );
}
