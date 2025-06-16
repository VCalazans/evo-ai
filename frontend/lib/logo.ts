/**
 * Utility to get the platform logo URL from environment variables
 * with fallback to the default Evolution API logo
 * Ensures proper access in both development and production environments
 */
export const getPlatformLogoUrl = (): string => {
  // Check multiple sources to ensure it works in all environments
  const logoUrl = 
    process.env.NEXT_PUBLIC_PLATFORM_LOGO_URL ||
    (typeof window !== 'undefined' && (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_PLATFORM_LOGO_URL) ||
    "https://s3.jovemprofissionalchat.com.br/typebot/Oracle.png";
  
  console.log('[Logo] Using logo URL:', logoUrl);
  return logoUrl;
};

/**
 * Utility to get the platform favicon URL from environment variables
 * with fallback to the default Evolution API favicon
 * Ensures proper access in both development and production environments
 */
export const getPlatformFaviconUrl = (): string => {
  // Check multiple sources to ensure it works in all environments
  const faviconUrl = 
    process.env.NEXT_PUBLIC_PLATFORM_FAVICON_URL ||
    (typeof window !== 'undefined' && (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_PLATFORM_FAVICON_URL) ||
    "https://s3.jovemprofissionalchat.com.br/typebot/Oicon.svg";
  
  console.log('[Logo] Using favicon URL:', faviconUrl);
  return faviconUrl;
}; 