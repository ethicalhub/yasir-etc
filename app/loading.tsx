export default function Loading() {
  return (
    <div
      className="container flex h-screen items-center justify-center"
      role="status"
      aria-label="Loading content"
    >
      <div
        className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
        aria-hidden="true"
      ></div>
      <span className="ml-4 text-primary">Loading...</span>
    </div>
  );
}
