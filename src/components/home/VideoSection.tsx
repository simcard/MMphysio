interface VideoSectionProps {
  videoId?: string;
  title?: string;
  description?: string;
}

export function VideoSection({ 
  videoId = 'dQw4w9WgXcQ', 
  title = 'Latest Sermon',
  description = 'Watch our most recent message and be blessed by the Word of God.'
}: VideoSectionProps) {
  return (
    <section className="section-padding bg-card">
      <div className="container-church">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">{description}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Church Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
