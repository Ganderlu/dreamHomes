type Props = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export default function SectionHeader({ title, subtitle, action }: Props) {
  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
