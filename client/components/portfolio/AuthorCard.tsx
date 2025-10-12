import { Card, Badge, Stack } from "react-bootstrap";

import { Card, Badge, Stack } from "react-bootstrap";

interface AuthorCardProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  avatarUrl?: string;
}

export default function AuthorCard({ id, name, role, bio, skills, avatarUrl }: AuthorCardProps) {
  return (
    <Card id={id} className="shadow-sm border-0 rounded-4 overflow-hidden softify-card">
      <Card.Body className="p-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            src={avatarUrl || "/placeholder.svg"}
            alt={name}
            className="rounded-circle border border-2 border-primary-subtle"
            width={64}
            height={64}
          />
          <div>
            <h3 className="h5 mb-0 fw-bold">{name}</h3>
            <div className="text-secondary">{role}</div>
          </div>
        </div>
        <p className="mb-3 text-muted">{bio}</p>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {skills.map((s) => (
            <Badge bg="primary" key={s} className="softify-badge">
              {s}
            </Badge>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}
