interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <p className="mb-3 font-display text-sm font-medium uppercase tracking-[0.25em] text-accent-yellow">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="accent-line mt-4 h-0.5 w-24 bg-gradient-to-r from-accent-yellow to-transparent" />
      {description && (
        <p className="mt-6 max-w-lg text-gray-text">{description}</p>
      )}
    </div>
  );
}
