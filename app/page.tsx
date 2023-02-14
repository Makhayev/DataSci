import Header from "components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header>Next.js with TypeScript and MongoDB</Header>
      <Link href="/posts" className="text-blue-600 underline">
        Posts
      </Link>
    </div>
  );
}
