import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-10 px-6 bg-amber-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-[var(color-cinza-carvao)]">
          SINTONIA
        </h2>
        <p className="text-[20px] text-neutral-600 font-[family-name:var(--font-inter)] mb-8 max-w-2xl mx-auto">
          Receba as reverberações diretamente. Curadoria exclusiva, reflexões e
          os ecos que moldam nossa visão de mundo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="seu@email.com"
            className="flex-1 px-6 py-4 border border-neutral-300 focus:outline-none focus:border-amber-600 bg-white text-neutral-900"
          />
          <button className="bg-neutral-900 text-neutral-100 px-8 py-4 font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2">
            <span>ENTRAR</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
