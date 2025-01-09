import Link from "next/link";

import { Button } from "@/components/uiComponent";

export default function NotFound() {
  return (
    <div
      className="container flex h-screen flex-col items-center justify-center text-center"
      role="alert"
      aria-labelledby="error-title"
      aria-describedby="error-description"
    >
      <h1 id="error-title" className="text-4xl font-bold text-error">
        404
      </h1>
      <p id="error-description" className="mt-2 text-dark">
        Page not found.
      </p>
      <Link href="/" aria-label="Return to the homepage">
        <Button variant="primary" className="mt-4">
          Go To Home
        </Button>
      </Link>
    </div>
  );
}
