/** Full-width image band with the page's gentle parallax (two only). */
export default function Band({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <section className="band" data-parallax aria-label={alt}>
      <img src={src} alt={alt} />
      {caption && <p className="band-caption">{caption}</p>}
    </section>
  );
}
