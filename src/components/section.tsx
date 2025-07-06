"use client";

export default function Section() {
  const sections = [
    {
      title: "LIFESTYLE",
      color: "bg-[#fcf7f8]",
      textColor: "text-neutral-900",
      href: "/lifestyle",
    },
    {
      title: "ARTE",
      color: "bg-[#212121]",
      textColor: "text-neutral-100",
      href: "/arte",
    },
    {
      title: "MODA",
      color: "bg-[#b6b09f]",
      textColor: "text-neutral-900",
      href: "/moda",
    },
    {
      title: "CINEMA",
      color: "bg-[#393e46]",
      textColor: "text-neutral-100",
      href: "/cinema",
    },
    {
      title: "CULTURA",
      color: "bg-[#e9dfc3]",
      textColor: "text-neutral-900",
      href: "/cultura",
    },
  ];
  return (
    <section className="py-8 px-2 sm:py-12 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`
                ${section.color} ${section.textColor} 
                transition-all duration-700 ease-out cursor-pointer
                h-20 flex items-center justify-center sm:h-24
              `}
              onClick={() => (window.location.href = section.href)}
            >
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-lg font-bold sm:text-2xl">
                  {section.title}
                </div>
                <div className="text-xs opacity-70 sm:text-sm">Explorar</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
