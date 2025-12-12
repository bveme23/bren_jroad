interface TextWithImageProps {
  title: string;
  text: string;
  image?: string;
  layout?: 'image-left' | 'image-right';
}

export function TextWithImage({ title, text, image, layout = 'image-right' }: TextWithImageProps) {
  const isImageLeft = layout === 'image-left';
  const imageUrl =
    image ?? 'https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=1200&q=80';

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
      <div className={`w-full lg:w-1/2 ${isImageLeft ? 'lg:order-2' : ''}`}>
        <div className="w-full overflow-hidden rounded-2xl bg-muted shadow-japanese transition-all duration-500 hover:shadow-japanese-hover">
          <img
            src={imageUrl}
            alt={title || 'Image'}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className={`w-full lg:w-1/2 ${isImageLeft ? 'lg:order-1' : ''}`}>
        {title && (
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle">{title}</h2>
        )}
        <div 
          className={`whitespace-pre-line text-base text-muted md:text-lg leading-relaxed ${title ? 'mt-6' : ''}`}
          dangerouslySetInnerHTML={{
            __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')
          }}
        />
      </div>
    </section>
  );
}
