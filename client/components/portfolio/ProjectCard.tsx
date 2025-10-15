import React from "react";
import { Card as RBCard, Button } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  galleryLabel?: string;
  onGallery?: () => void;
}

function linkify(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) => {
    const isUrl = /^https?:\/\//.test(part);
    if (isUrl) {
      return (
        <a key={i} href={part} target="_blank" rel="noreferrer" className="link-primary">
          {part}
        </a>
      );
    }
    // preserve line breaks
    const lines = part.split("\n");
    return lines.map((line, idx) => (
      <React.Fragment key={`${i}-${idx}`}>
        {line}
        {idx < lines.length - 1 ? <br /> : null}
      </React.Fragment>
    ));
  });
}

export default function ProjectCard({ title, description, image, tags, link, galleryLabel = "Zobacz galerię", onGallery }: ProjectCardProps) {
  return (
    <RBCard className="h-100 shadow-sm border-0 rounded-4 overflow-hidden softify-card">
      {image && (
        <div className="ratio ratio-16x9 bg-body-secondary">
          <img src={image} alt={title} loading="lazy" className="w-100 h-100 object-fit-cover" />
        </div>
      )}
      <RBCard.Body className="p-4 d-flex flex-column">
        <RBCard.Title className="fw-bold mb-2">{title}</RBCard.Title>
        <RBCard.Text className="text-muted flex-grow-1">{linkify(description)}</RBCard.Text>
        <div className="d-flex align-items-center gap-2 flex-wrap mt-2">
          {tags?.map((t) => (
            <span key={t} className="badge rounded-pill text-bg-light border">
              {t}
            </span>
          ))}
        </div>

        {onGallery && (
          <div className="mt-3">
            <Button variant="primary" onClick={onGallery} className="w-100">
              {galleryLabel}
            </Button>
          </div>
        )}

        {link && (
          <a href={link} className="stretched-link" aria-label={title}></a>
        )}
      </RBCard.Body>
    </RBCard>
  );
}
