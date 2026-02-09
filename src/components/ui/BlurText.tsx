type BlurTextProps = {
  paragraphs: string[]
  className?: string
}

export default function BlurText({ paragraphs, className = '' }: BlurTextProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {paragraphs.map((paragraph, pIndex) => (
        <p
          key={pIndex}
          className="flex flex-wrap justify-between text-justify"
          style={{ textJustify: 'inter-word' }}
        >
          {paragraph.split(' ').map((word, wIndex) => (
            <span
              key={wIndex}
              className="blur-word inline-block"
              style={{
                filter: 'blur(12px)',
                opacity: 0,
                transform: 'translateY(8px)',
              }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}
