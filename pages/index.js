import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <a>
        This is our <Link href="/team">team</Link>
      </a>
    </>
  );
}
