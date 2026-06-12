import React from "react";

const ChapterDetails = ({ textSize, fontFamily }) => {
  return (
    <main className="pt-32 pb-48 px-6 md:px-0">
      <article className="max-w-180 mx-auto">
        {/* Chapter Header */}
        <div className="mb-16 text-center">
          <span className="font-['Inter'] font-semibold text-[14px] tracking-[0.2em] uppercase opacity-60 mb-4 block text-[var(--theme-primary)]">
            Chapter Forty-Two
          </span>
          <h2 className="font-['Playfair_Display'] font-bold text-[48px] mb-8 leading-tight">
            The Silent Accord
          </h2>
          <div className="h-px w-24 mx-auto opacity-30 bg-(--theme-text)"></div>
        </div>

        <div className="relative w-full h-64 mb-16 rounded-2xl overflow-hidden group">
          <img
            alt="Atmospheric reading"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEJpClcie4Qln8OJwWRxDlMEc-gbt0adPxH1LIJs2VWL-aySGcCieNQZEA-DSalHPiRg_a7Hw8Ixtu3SlBXOYksvoaxg_4SP9JcvbRi_iFxiwtQJD3NcZOJrjluTtN8K3gzQ0H-C0Fb6UyYa2phz_F_jvoPwCzOsJhtI6fihvti2Ts-UQgW0lPue0YjuJX2kxlTbvJ4dxAibPo5NIRFUz2xeOqG0sCqQ7fiIL8qFM5Iu0HSkMrHTpF7M1fxh0q5Tkc-aigTDzad5Q"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Reading Content */}
        <div
          className="space-y-8 transition-all duration-300"
          style={{
            fontSize: `${textSize}px`,
            lineHeight: 2.2,
            fontFamily:
              fontFamily === "Lora" ? '"Lora", serif' : '"Inter", sans-serif',
          }}
        >
          <p>
            <span className="float-left text-7xl font-['Playfair_Display'] font-bold mr-4 mt-2 leading-none text-[var(--theme-primary)]">
              T
            </span>
            he mist clung to the valleys of the Jade Empire like a secret long
            kept. Kaelen stood at the precipice of the precipice, his fingers
            tracing the cold obsidian hilt of a blade that had seen more kings
            fall than seasons change. The air was thin here, tasting of ozone
            and ancient pine.
          </p>
          <p>
            "You were not followed," a voice drifted from the shadows of a
            weathered stone archway. It was a voice like dry parchment, brittle
            and weighted with the gravity of centuries.
          </p>
          <p>
            The Scholar stepped into the pale moonlight. He was a small man,
            draped in silks the color of a bruised twilight. In his hands, he
            carried a scroll case of worked silver, its surface etched with the
            undulating patterns of a sleeping dragon.
          </p>

          <div className="flex justify-center my-20 gap-3 opacity-30">
            <div className="w-2 h-2 rounded-full bg-[var(--theme-text)]"></div>
            <div className="w-2 h-2 rounded-full bg-[var(--theme-text)]"></div>
            <div className="w-2 h-2 rounded-full bg-[var(--theme-text)]"></div>
          </div>

          <p>
            As the first light of dawn began to bleed over the horizon, painting
            the clouds in shades of vibrant teal and bruised violet, Kaelen
            began his descent. Every step felt heavier than the last, not from
            exhaustion, but from the sudden clarity of his purpose.
          </p>
        </div>

        <div className="mt-24 pt-12 border-t flex flex-col items-center border-[var(--theme-border)]">
          <span className="font-['Inter'] font-semibold text-[14px] opacity-60 mb-6">
            End of Chapter 42
          </span>
          <button className="px-8 py-4 bg-teal-700 text-white rounded-full font-['Inter'] font-semibold text-[14px] flex items-center gap-3 hover:bg-teal-800 transition-all active:scale-95 shadow-lg">
            Next Chapter: The Sunken Archive
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </article>
    </main>
  );
};

export default ChapterDetails;
