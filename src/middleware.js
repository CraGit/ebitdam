import { createLocaleRedirect, pathnameHasLocale } from "./i18n";
import { createClient } from "@/prismicio";

export async function middleware(request) {
  if (!pathnameHasLocale(request)) {
    return createLocaleRedirect(request);
  }
}

export const config = {
  // Do not localize these paths
  matcher: ["/((?!_next|api|slice-simulator|icon.svg).*)"],
};
