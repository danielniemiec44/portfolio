import { Card } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden softify-card">
      {image && (
        <div className="ratio ratio-16x9 bg-body-secondary">
          <img src={image} alt={title} className="w-100 h-100 object-fit-cover" />
        </div>
      )}
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title className="fw-bold mb-2">{title}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>
        <div className="d-flex align-items-center gap-2 flex-wrap mt-2">
          {tags?.map((t) => (
            <span key={t} className="badge rounded-pill text-bg-light border">
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} className="stretched-link" aria-label={title}></a>
        )}
      </Card.Body>
    </Card>
  );
}
