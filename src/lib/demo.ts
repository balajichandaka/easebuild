import { site } from "@/content/site";

/**
 * Where the "Book a demo" CTAs point. If a booking link is configured in
 * content/site.ts it wins; otherwise CTAs scroll to the on-page demo form.
 */
export function demoHref(): string {
  return site.contact.demoLink?.trim() ? site.contact.demoLink : "#demo";
}
