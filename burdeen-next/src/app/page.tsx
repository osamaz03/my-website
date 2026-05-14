import { redirect } from "next/navigation";

/** Fallback if middleware is skipped; default locale. */
export default function Home() {
  redirect("/en");
}
