export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="font-[family-name:var(--font-playfair)] text-[var(color-cinza-carvao)] text-4xl italic font-regular">
              ECHO
            </div>
            <p className="text-sm text-neutral-400">
              Manifesto visual e cultural.
              <br />
              Curadoria viva de referências.
            </p>
          </div>

          <div>
            <div className="text-sm font-medium mb-4">NAVEGAÇÃO</div>
            <div className="space-y-2 text-sm text-neutral-400">
              <div>Manifesto</div>
              <div>Curadoria</div>
              <div>Editorial</div>
              <div>Reverberação</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium mb-4">CONEXÕES</div>
            <div className="space-y-2 text-sm text-neutral-400">
              <div>
                <a
                  href="https://instagram.com/21lucasbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </a>
              </div>
              <div>
                <a href="#">NEWSLETTER</a>
              </div>
              <div>
                <a href="#">CONTATO</a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-[family-name:var(--font-playfair)] text-[var(color-cinza-carvao)] italic font-medium mb-4">
              ECHO
            </div>
            <div className="text-xs text-neutral-500">
              © 2025 Echo. Todos os direitos reservados.
              <br />
              Feito com intenção e propósito.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
