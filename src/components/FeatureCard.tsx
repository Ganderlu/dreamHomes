type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function FeatureCard({ title, description, icon }: Props) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div>
        <p className="font-medium text-zinc-900">{title}</p>
        <p className="text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}
