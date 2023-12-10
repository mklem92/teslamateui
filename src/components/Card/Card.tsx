import React, { HTMLAttributes } from "react";

type Props = {
  title?: string;
  content?: string;
  endContent?: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Card: React.FC<Props> = ({
  title,
  content,
  endContent,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-card p-8 flex flex-col gap-2 rounded-lg items-start justify-center ${className} ${
        onClick ? "hover:bg-secondary cursor-pointer" : ""
      }`}
    >
      {title && (
        <div className="text-color-text-secondary uppercase text-sm font-bold">
          {title}
        </div>
      )}
      {content && (
        <div className="flex flex-row items-center justify-between w-full">
          <div className="text-color-text-primary text-3xl font-bold">
            {content}
          </div>
          {endContent}
        </div>
      )}
    </div>
  );
};

export { Card };
