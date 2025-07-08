import { Eye, Heart, Play, Share2 } from "lucide-react";

type MoodboardItem = {
  type: "image" | "text" | "video";
  title: string;
  category: string;
  aspect?: string;
  background?: string;
};

export default function Moodboard() {
  const moodboardItems: MoodboardItem[] = [
    {
      type: "image",
      title: "easymoneysniper",
      category: "ESPORTE",
      aspect: "aspect-square",
      background: "../../assets/images/moodboard-1.png",
    },
    {
      type: "text",
      title: "A Ascensão do Como 1907",
      category: "FUTEBOL",
      aspect: "aspect-[3/4]",
    },
    {
      type: "image",
      title: "Il Fenomeno",
      category: "ESPORTE",
      aspect: "aspect-[4/3]",
      background: "../../assets/images/moodboard-2.png",
    },
    {
      type: "video",
      title: "O Olhar de Godard",
      category: "CINEMA",
      aspect: "aspect-video",
    },
    {
      type: "image",
      title: "VAPO?",
      category: "VAPO!",
      aspect: "aspect-square",
      background: "../../assets/images/moodboard-3.png",
    },
    {
      type: "text",
      title: "Como Daniel Arsham Transforma o Cotidiano",
      category: "ARTE",
      aspect: "aspect-[3/4]",
    },
  ];
  return (
    <section id="curadoria" className="py-10 px-6 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">CURADORIA</h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Fragmentos visuais que ecoam nossa visão de mundo. Cada peça conta
            uma história, cada imagem reverbera uma emoção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moodboardItems.map((item, index) => (
            <div
              key={index}
              className={`
                  ${item.aspect} bg-neutral-200 group cursor-pointer overflow-hidden
                  hover:shadow-2xl transition-all duration-500
                `}
            >
              <div className="h-full relative">
                {item.type === "image" && (
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.background})`,
                    }}
                  />
                )}

                {item.type === "text" && (
                  <div className="h-full bg-neutral-900 p-6 flex items-center justify-center">
                    <div className="text-center text-neutral-100">
                      <div className="text-2xl font-bold mb-2">
                        {item.title}
                      </div>
                      <div className="text-sm opacity-70">{item.category}</div>
                    </div>
                  </div>
                )}

                {item.type === "video" && (
                  <div className="h-full bg-neutral-800 flex items-center justify-center">
                    <Play size={48} className="text-neutral-300" />
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-xs opacity-70">{item.category}</div>
                    </div>
                    <div className="flex space-x-2">
                      <Eye size={16} />
                      <Heart size={16} />
                      <Share2 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
