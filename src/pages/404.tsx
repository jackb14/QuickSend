import FullPageError from "~/components/FullPageError";

export default function FallBackError() {
  return (
    <FullPageError
      errorCode={404}
      heading="Page not found"
      linkText="Go back home"
      linkAddress="/"
    >
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
    </FullPageError>
  );
}
