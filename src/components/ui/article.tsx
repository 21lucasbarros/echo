export interface ArticleProps {
  borderColor?: string;
  type: string;
  title: string;
  resume: string;
  link?: string;
}

export default function Article({
  borderColor,
  type,
  title,
  resume,
  link,
}: ArticleProps) {
  return (
    <article
      className={`border-l-4 pl-6 ${
        borderColor ? borderColor : "border-l-4 border-zinc-950"
      }`}
    >
      <div className="text-sm text-neutral-500 mb-2">{type}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-neutral-700 leading-relaxed">{resume}</p>
      {link && (
        <a
          href={link}
          className="font-bold text-neutral-800 hover:underline mt-4 inline-block"
        >
          Ver mais sobre
        </a>
      )}
    </article>
  );
}
