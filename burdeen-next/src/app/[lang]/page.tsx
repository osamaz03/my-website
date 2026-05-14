import { notFound } from "next/navigation";

/** Only `/en` and `/ar` are used; other paths should 404. */
export default function DeprecatedLangPage() {
  notFound();
}
