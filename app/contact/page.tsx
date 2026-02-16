import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Viremont Advisory Group",
  description:
    "Contact Viremont Advisory Group for confidential discussions regarding government relations, investment strategy or institutional advisory mandates in East Africa.",
  alternates: {
    canonical: "https://viremontadvisorygroup.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
