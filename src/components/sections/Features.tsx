'use client';

import { FaMapMarkedAlt, FaBookOpen, FaHandsHelping } from 'react-icons/fa';

// ilerleyen zamanda burası sitaData.ts altında toplanabilir.

const features = [
    {
        title: 'Ormanları birlikte takip ediyoruz',
        description:
            'Haritalar, açık veriler ve gözlemlerle doğaya dair olan biteni daha görünür kılmaya çalışıyoruz. Çünkü bir şeyi fark etmek, değiştirebilmenin ilk adımıdır.',
        icon: <FaMapMarkedAlt className="text-[#0F6220] text-3xl" />,
    },
    {
        title: 'Bilgiyi sadeleştiriyoruz',
        description:
            'Yangın öncesi, anı ve sonrasında neler yapılabilir? Teknik dilden uzak, herkesin anlayabileceği rehberler hazırlıyoruz. Bilgiye erişmek bir ayrıcalık olmamalı.',
        icon: <FaBookOpen className="text-[#0F6220] text-3xl" />,
    },
    {
        title: 'Birbirimize destek olmaya çalışıyoruz',
        description:
            'Gönüllülük ruhuyla doğaya el vermek isteyenlerle, ihtiyacı olanları buluşturabileceğimiz yollar arıyoruz. Dayanışmanın dijital hâlini kuruyoruz.',
        icon: <FaHandsHelping className="text-[#0F6220] text-3xl" />,
    },
];

export default function Features() {
    return (
        <section className="bg-[#f8f9fa] py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Birlikte Ne Üretiyoruz?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm p-6 text-left border border-gray-100 hover:shadow-md transition">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}