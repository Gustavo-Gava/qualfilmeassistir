import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed inset-0 flex h-header items-center justify-between bg-background p-4 text-white shadow-lg md:p-6">
      <Link href="/">
        <Image src="/logo.png" alt="popcorn icon" width={32} height={32} />
      </Link>

      <div className="flex gap-2">
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>
    </header>
  );
};
