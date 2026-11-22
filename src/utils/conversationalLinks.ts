export const conversationalEnabled = () => process.env.ENABLE_CONVERSATIONAL_SKEDR === "true";
export const conversationalMeta = {
  title: "More photography. Less sharing admin. | Skedr",
  description: "Connect Flickr, describe your photography goal, review your groups and tags, then share matching photos and follow real progress. Existing pages stay available.",
  image: "https://skedr.io/apple-touch-icon.png",
};
export const conversationalStarters = [
  { id: "bird-sharing", label: "Share my bird photos", goal: "Help me set up sharing for my bird photos." },
  { id: "landscape-groups", label: "Find landscape groups", goal: "Help me find groups for my landscape photos." },
  { id: "existing-groups", label: "Set up my existing groups", goal: "Help me configure the Flickr groups I already belong to." },
] as const;
export function conversationalSignup(placement: string, starter?: string) {
  const url = new URL("https://app.skedr.io/auth/create-account");
  const known = conversationalStarters.find(value => value.id === starter);
  url.search = new URLSearchParams({ utm_source: "skedr_landing", utm_medium: "website", utm_campaign: "conversational_skedr", utm_content: known?.id || (placement === "final" ? "conversational-final" : "conversational-hero"), ...(known ? { assistant_starter: known.id } : {}) }).toString();
  return url.href;
}
