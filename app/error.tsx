"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/uiComponent";
import { ROUTES } from "@/constants/ROUTES";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div
      className="container flex h-screen flex-col items-center justify-center text-center"
      role="alert"
      aria-labelledby="error-title"
      aria-describedby="error-description"
    >
      <h1 id="error-title" className="text-4xl font-bold text-error">
        Something went wrong!
      </h1>
      <p id="error-description" className="mt-2 text-dark">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <Button variant="primary" onClick={reset}>
          Try Again
        </Button>
        <Link href={ROUTES.HOME} aria-label="Go to the homepage">
          <Button variant="secondary">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
