import { Volume2 } from "lucide-react";

export default function Hero() {
  return (
    <main className="p-4 flex flex-row items-center justify-between w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-[family-name:var(--font-playfair)] text-[var(color-cinza-carvao)] text-8xl italic font-regular">
                ECHO
              </h1>
              <p className="text-xl lg:text-[22px] text-neutral-600 font-[family-name:var(--font-inter)] max-w-lg">
                Aquilo que reverbera — não só sons, mas sentimentos, imagens,
                memórias, estilo de vida.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-neutral-700 font-[family-name:var(--font-inter)] max-w-xl">
                Um manifesto visual e cultural. Uma curadoria viva de
                referências onde moda é linguagem, arte é pulsação e estética é
                identidade.
              </p>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-neutral-900 text-neutral-100 px-6 py-3 rounded-none hover:bg-neutral-800 font-[family-name:var(--font-inter)] transition-colors">
                  <span className="font-medium">EXPERIENCE</span>
                </button>

                <div className="flex items-center space-x-2 text-sm text-neutral-500 font-[family-name:var(--font-inter)]">
                  <Volume2 size={16} />
                  <span>Som recomendado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden relative">
              {/* Blue gradient inspired by "Jesus is King" album cover */}
              <div className="absolute inset-0 bg-gradient-to-bl from-[#064a8e] via-[#1976d2] to-[#1a237e]" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-neutral-100 space-y-2">
                  <div className="text-sm font-medium opacity-70">
                    REVERBERAÇÃO #001
                  </div>
                  <div className="text-lg font-bold">vapo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
