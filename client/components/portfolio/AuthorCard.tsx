import { Card as RBCard, Badge, Stack } from "react-bootstrap";

interface AuthorCardProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  avatarUrl?: string;
}

export default function AuthorCard({
  id,
  name,
  role,
  bio,
  skills,
  avatarUrl,
}: AuthorCardProps) {
  return (
    <RBCard
      id={id}
      className="shadow-sm border-0 rounded-4 overflow-hidden softify-card"
    >
      <RBCard.Body className="p-3 p-sm-4 p-md-5">
        <div className="d-flex flex-column align-items-center text-center gap-3 gap-sm-4 mb-3 mb-md-4">
          <img
            src={avatarUrl || "/placeholder.svg"}
            alt={name}
            className="rounded-3 border-2 border-primary-subtle flex-shrink-0"
            width={120}
            height={120}
            style={{ width: '120px', height: '120px' }}
          />
          <div className="w-100 text-center">
            <h3 className="h5 h4 mb-2 fw-bold">{name}</h3>
            <div className="text-secondary fs-6">{role}</div>
          </div>
        </div>

        {/* Render bio preserving blank lines and single newlines */}
        <div className="mb-3 mb-md-4 text-muted fs-6">
          {bio
            .split(/\n\s*\n/) // split into paragraphs on empty-line (double newline)
            .map((para, pIdx) => {
              const lines = para.split(/\n/);
              return (
                <p key={pIdx} className="mb-3 lh-base">
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
            <Badge
              bg="primary"
              key={s}
              className={`softify-badge px-2 py-1${s === "Paper" ? " badge-highlight" : ""}`}
            >
              {s}
            </Badge>
          ))}
        </Stack>
      </RBCard.Body>
    </RBCard>
  );
}
