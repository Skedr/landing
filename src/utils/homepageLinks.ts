export function homepageAppLink(placement: string, signIn = false) {
  const url = new URL(
    signIn ? "/auth/sign-in" : "/auth/create-account",
    "https://app.skedr.io",
  );
  url.search = new URLSearchParams({
    utm_source: "skedr_landing",
    utm_medium: "website",
    utm_campaign: "flickr_first_group",
    utm_content: placement,
  }).toString();
  return url.href;
}
