/**
 * Utility to get the platform logo URL from environment variables
 * with fallback to the default Evolution API logo
 */
export const getPlatformLogoUrl = (): string => {
  return process.env.NEXT_PUBLIC_PLATFORM_LOGO_URL || "https://evolution-api.com/files/evo/logo-evo-ai.svg";
};

/**
 * Utility to get the platform favicon URL from environment variables
 * with fallback to the default Evolution API favicon
 */
export const getPlatformFaviconUrl = (): string => {
  return process.env.NEXT_PUBLIC_PLATFORM_FAVICON_URL || "https://evolution-api.com/files/evo/favicon.svg";
}; 