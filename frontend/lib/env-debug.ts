/**
 * Debug utility to help troubleshoot environment variable issues
 * especially in production environments
 */
export const debugEnvironmentVariables = () => {
  if (typeof window !== 'undefined') {
    console.log('=== Environment Variables Debug ===');
    console.log('NEXT_PUBLIC_PLATFORM_LOGO_URL (process.env):', process.env.NEXT_PUBLIC_PLATFORM_LOGO_URL);
    console.log('NEXT_PUBLIC_PLATFORM_FAVICON_URL (process.env):', process.env.NEXT_PUBLIC_PLATFORM_FAVICON_URL);
    
    // Check if variables are available through __NEXT_DATA__
    const nextData = (window as any).__NEXT_DATA__;
    if (nextData?.env) {
      console.log('NEXT_PUBLIC_PLATFORM_LOGO_URL (__NEXT_DATA__):', nextData.env.NEXT_PUBLIC_PLATFORM_LOGO_URL);
      console.log('NEXT_PUBLIC_PLATFORM_FAVICON_URL (__NEXT_DATA__):', nextData.env.NEXT_PUBLIC_PLATFORM_FAVICON_URL);
    }
    
    // Check all environment variables that start with NEXT_PUBLIC
    console.log('All NEXT_PUBLIC variables:');
    Object.keys(process.env).forEach(key => {
      if (key.startsWith('NEXT_PUBLIC')) {
        console.log(`${key}:`, process.env[key]);
      }
    });
    console.log('====================================');
  }
}; 