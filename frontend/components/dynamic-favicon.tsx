"use client";

import { useEffect } from "react";
import { getPlatformFaviconUrl } from "@/lib/logo";

export default function DynamicFavicon() {
  useEffect(() => {
    const faviconUrl = getPlatformFaviconUrl();
    
    // Remove existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(favicon => favicon.remove());
    
    // Create new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = faviconUrl;
    
    // Add to head
    document.head.appendChild(link);
    
    // Also create a fallback for browsers that don't support SVG favicons
    const linkPng = document.createElement('link');
    linkPng.rel = 'alternate icon';
    linkPng.type = 'image/png';
    linkPng.href = faviconUrl;
    
    document.head.appendChild(linkPng);
  }, []);

  return null; // This component doesn't render anything
} 