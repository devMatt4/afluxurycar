import { getSiteSettings } from "../repositories/site-settings";

export async function getSettings() {
  const settings = await getSiteSettings();

  if (!settings) {
    throw new Error("Site settings non trovate.");
  }

  return settings;
}