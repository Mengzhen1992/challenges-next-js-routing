import Link from "next/link";
import StyledLink from "../components/StyledLink";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      This is our
      <Link href="/team">
        <StyledLink>team</StyledLink>
      </Link>
    </>
  );
}
