import React from "react";
import { Card } from "../../../../components/Card/Card";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
  content: string;
  path?: string;
  className?: string;
};

const TireSummary: React.FC<Props> = ({
  title = "Tires",
  content,
  path,
  className = "w-1/3",
}) => {
  const navigate = useNavigate();

  return (
    <Card
      title={title}
      content={content}
      className={className}
      onClick={path ? () => navigate(path) : undefined}
    />
  );
};

export { TireSummary };
