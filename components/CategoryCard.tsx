type Props = { icon: string; title: string; caption?: string };

export default function CategoryCard({ icon, title, caption }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5">
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 font-semibold">{title}</div>
      {caption ? <div className="text-sm text-white/70">{caption}</div> : null}
    </div>
  );
}