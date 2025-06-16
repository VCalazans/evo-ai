"use client";

import { useEffect, useState } from "react";
import { getPlatformFaviconUrl } from "@/lib/logo";
import { debugEnvironmentVariables } from "@/lib/env-debug";

export default function DynamicFavicon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateFavicon = () => {
      // Debug environment variables to help troubleshoot production issues
      debugEnvironmentVariables();
      
      const faviconUrl = getPlatformFaviconUrl();
      console.log('[DynamicFavicon] Setting favicon to:', faviconUrl);
      
      // Remove existing favicon links more thoroughly
      const existingFavicons = document.querySelectorAll('link[rel*="icon"], link[rel="shortcut icon"]');
      existingFavicons.forEach(favicon => {
        console.log('[DynamicFavicon] Removing existing favicon:', favicon.getAttribute('href'));
        favicon.remove();
      });
      
      // Create new favicon link with cache busting
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      link.href = `${faviconUrl}?t=${Date.now()}`;
      
      // Add to head
      document.head.appendChild(link);
      
      // Also create a fallback for browsers that don't support SVG favicons
      const linkPng = document.createElement('link');
      linkPng.rel = 'alternate icon';
      linkPng.type = 'image/png';
      linkPng.href = `${faviconUrl}?t=${Date.now()}`;
      
      document.head.appendChild(linkPng);

      console.log('[DynamicFavicon] Favicon updated successfully');
    };

    // Update immediately
    updateFavicon();

    // Also update when the page becomes visible (handles cases where env vars are loaded later)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        updateFavicon();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [mounted]);

  return null; // This component doesn't render anything
} 