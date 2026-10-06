import Link from "next/link";

export const metadata = {
  title: "Menu",
  description:
    "Margheritapizza, Tiramisu, Chip Cookies and vegetarian stir-Fry, delivered across Addis",
  alternates: { canonical: "/menu" }
};

export default function MenuPage() {
  return (
    <main className="hero">
      <p className="eyebrow">Addis Ababa, Ethiopia</p>
      <h1>Let's Order Some Delicious Cuisines</h1>
    </main>
  );
}