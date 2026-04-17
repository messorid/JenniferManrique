export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-16 h-16">
          <span className="absolute inset-0 rounded-full border-4 border-malva-100" />
          <span className="absolute inset-0 rounded-full border-4 border-t-dorado border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
        <span className="font-[family-name:var(--font-display)] text-malva-900 text-lg tracking-wide">
          Dra. Jennifer Manrique
        </span>
        <span className="text-xs text-texto-suave uppercase tracking-[0.2em]">
          Endocrinología en Barinas
        </span>
      </div>
    </div>
  );
}
