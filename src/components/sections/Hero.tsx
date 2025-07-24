'use client';


export default function Hero() {
    return (
        <section className="w-full py-24 px-6 pt-32 text-center bg-[#F7F5E6]">
            <div className="flex justify-center mb-8">
                <img
                    src="/assets/dogaicin-logo.svg"
                    alt="dogaicin.tr logo"
                    className="h-20 w-auto"
                />
            </div>
            <div className="mt-6 max-w-4xl mx-auto leading-relaxed">
                <p className="text-lg md:text-xl text-[#2D2D2D]">
                    <strong>dogaicin.tr</strong>, doğaya karşı sorumluluğunu unutmayanların dijitalde buluşma noktasıdır.
                    Haritalar, bilgiler, gönüllüler ve veriler bir araya gelir; amaç, sadece farkındalık değil, hareket etmektir.
                </p>
            </div>
        </section>
    );
}
