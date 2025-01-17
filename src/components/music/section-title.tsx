import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => (
  <div className="space-y-1">
    <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default SectionTitle;
