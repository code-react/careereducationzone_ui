import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <div className="not_found_container">
        <img src="/assets/not_found/not-found.svg" alt="" />
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed had it’s name changed or is temporarily unavailable</p>
        <Link href="/">Go to Home Page</Link>
      </div>
    </div>
  );
}
