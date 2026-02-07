import { Card as RBCard, Badge, Stack } from "react-bootstrap";

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
    <RBCard id={id} className="shadow-sm border-0 rounded-4 overflow-hidden softify-card">
      <RBCard.Body className="p-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            src={avatarUrl || "/placeholder.svg"}
            alt={name}
            className="rounded-circle border-2 border-primary-subtle"
            width={64}
            height={64}
          />
          <div>
            <h3 className="h5 mb-0 fw-bold">{name}</h3>
            <div className="text-secondary">{role}</div>
          </div>
        </div>

        {/* Render bio preserving blank lines and single newlines */}
        <div className="mb-3 text-muted">
          {bio
            .split(/\n\s*\n/) // split into paragraphs on empty-line (double newline)
            .map((para, pIdx) => {
              const lines = para.split(/\n/);
              return (
                <p key={pIdx} className="mb-2">
                  {lines.map((line, lIdx) => (
                    <span key={lIdx}>
                      {line}
                      {lIdx !== lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              );
            })}
        </div>

        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {skills.map((s) => (
            <Badge bg="primary" key={s} className="softify-badge">
              {s}
            </Badge>
          ))}
        </Stack>
      </RBCard.Body>
    </RBCard>
  );
}
