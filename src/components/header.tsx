export default function Header() {
  return (
    <header className="flex items-center border-b border-neutral-200">
      <div className="h-16 px-8 flex items-center justify-between w-full">
        <div>
          <h1 className="font-[family-name:var(--font-playfair)] text-[var(color-cinza-carvao)] text-3xl italic font-regular">
            ECHO
          </h1>
        </div>
        <div className="flex items-center">
          <ul className="gap-5 flex-row flex text-[var(--color-cinza-carvao)] font-[family-name:var(--font-inter)] text-sm font-medium">
            <li>
              <a href="#">MANIFESTO</a>
            </li>
            <li>
              <a href="#">CURADORIA</a>
            </li>
            <li>
              <a href="#">EDITORIAL</a>
            </li>
            <li>
              <a href="#">REVERBERAÇÃO</a>
            </li>
          </ul>
        </div>
        <button className="cursor-pointer text-[var(--color-cinza-carvao)] font-[family-name:var(--font-inter)] text-sm font-medium">
          NEWSLETTER
        </button>
      </div>
    </header>
  );
}
