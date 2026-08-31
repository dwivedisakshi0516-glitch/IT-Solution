import React from "react";

function IconBase({ children, className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function TechnologyIcon({ name, className = "" }) {
  switch (name) {
    case "laptop":
      return (
        <IconBase className={className}>
          <rect x="5" y="6" width="14" height="9" rx="1.8" />
          <path d="M3.5 18h17" />
          <path d="M7 18l1.2-2h7.6l1.2 2" />
        </IconBase>
      );
    case "desktop":
      return (
        <IconBase className={className}>
          <rect x="4" y="5" width="12" height="9" rx="1.8" />
          <path d="M10 14v3" />
          <path d="M7.5 18h5" />
          <rect x="18" y="7" width="2.5" height="11" rx="0.8" />
          <path d="M18 10h2.5" />
        </IconBase>
      );
    case "monitor":
      return (
        <IconBase className={className}>
          <rect x="4" y="5" width="16" height="10" rx="2" />
          <path d="M12 15v3" />
          <path d="M8.5 19h7" />
        </IconBase>
      );
    case "printer":
      return (
        <IconBase className={className}>
          <path d="M7 8V5h10v3" />
          <rect x="5" y="9" width="14" height="7" rx="2" />
          <rect x="7" y="13" width="10" height="6" rx="1" />
          <circle cx="16" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
        </IconBase>
      );
    case "keyboard":
      return (
        <IconBase className={className}>
          <rect x="3" y="7" width="18" height="10" rx="2" />
          <circle cx="6.5" cy="10.2" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="9.5" cy="10.2" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="12.5" cy="10.2" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="10.2" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="18" cy="10.2" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="6.5" cy="13.4" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="9.5" cy="13.4" r="0.75" fill="currentColor" stroke="none" />
          <path d="M12 13.4h4.8" />
          <circle cx="18" cy="13.4" r="0.75" fill="currentColor" stroke="none" />
        </IconBase>
      );
    case "mouse":
      return (
        <IconBase className={className}>
          <rect x="8" y="4" width="8" height="16" rx="4" />
          <path d="M12 8V5.5" />
        </IconBase>
      );
    case "router":
      return (
        <IconBase className={className}>
          <rect x="4" y="12" width="16" height="5" rx="1.6" />
          <path d="M8 12V8M16 12V8" />
          <circle cx="7" cy="16.9" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="10" cy="16.9" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="13" cy="16.9" r="0.75" fill="currentColor" stroke="none" />
          <path d="M9 7c.7-1 1.7-1.5 3-1.5S14.3 6 15 7" />
        </IconBase>
      );
    case "wifi":
      return (
        <IconBase className={className}>
          <path d="M5 9a10 10 0 0 1 14 0" />
          <path d="M8 12a6 6 0 0 1 8 0" />
          <path d="M10.5 15a2.5 2.5 0 0 1 3 0" />
          <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
        </IconBase>
      );
    case "cctv":
      return (
        <IconBase className={className}>
          <path d="M5 10l9-4 3 6-9 4z" />
          <path d="M17 12l2 4" />
          <path d="M7 13l-2 5" />
          <path d="M9 17h4" />
        </IconBase>
      );
    case "server":
      return (
        <IconBase className={className}>
          <rect x="5" y="4" width="14" height="5" rx="1.5" />
          <rect x="5" y="10" width="14" height="5" rx="1.5" />
          <rect x="5" y="16" width="14" height="4" rx="1.5" />
          <circle cx="8" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="8" cy="12.5" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="8" cy="18" r="0.75" fill="currentColor" stroke="none" />
          <path d="M11 6.5h5M11 12.5h5M11 18h5" />
        </IconBase>
      );
    case "storage":
      return (
        <IconBase className={className}>
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.5" />
          <path d="M5.5 6.5v8c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-8" />
          <path d="M5.5 10.5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5" />
        </IconBase>
      );
    case "repair":
      return (
        <IconBase className={className}>
          <path d="M14.5 6.5a3 3 0 0 0-4 4l-5 5 2.5 2.5 5-5a3 3 0 0 0 4-4l-2 2-2-2z" />
        </IconBase>
      );
    case "tools":
      return (
        <IconBase className={className}>
          <path d="M14 6l4 4" />
          <path d="M4 20l7-7" />
          <path d="M10 7a3 3 0 0 0-4 4l-2 2 5 5 2-2a3 3 0 0 0 4-4z" />
        </IconBase>
      );
    case "gaming":
      return (
        <IconBase className={className}>
          <path d="M7 10h10a3 3 0 0 1 2.8 3.8l-.8 2.4a1.7 1.7 0 0 1-2.7.8L14 15h-4l-2.3 2a1.7 1.7 0 0 1-2.7-.8l-.8-2.4A3 3 0 0 1 7 10z" />
          <path d="M8.5 13h3M10 11.5v3" />
          <circle cx="15.5" cy="12.5" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="17.5" cy="14.5" r="0.75" fill="currentColor" stroke="none" />
        </IconBase>
      );
    case "processor":
      return (
        <IconBase className={className}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <rect x="10" y="10" width="4" height="4" rx="0.8" />
          <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
        </IconBase>
      );
    case "support":
      return (
        <IconBase className={className}>
          <path d="M6 11a6 6 0 1 1 12 0" />
          <rect x="4" y="12" width="3" height="6" rx="1.5" />
          <rect x="17" y="12" width="3" height="6" rx="1.5" />
          <path d="M7 14v-1a5 5 0 0 1 10 0v1" />
          <path d="M12 18v2a2 2 0 0 1-2 2H9" />
        </IconBase>
      );
    case "shield":
      return (
        <IconBase className={className}>
          <path d="M12 3l6 2.5v5.8c0 3.6-2.3 6.8-6 8.7-3.7-1.9-6-5.1-6-8.7V5.5L12 3z" />
          <path d="M9.5 12l1.7 1.7 3.3-3.7" />
        </IconBase>
      );
    case "network":
      return (
        <IconBase className={className}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="6" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
          <path d="M12 7v4M12 11l-4 4M12 11l4 4" />
        </IconBase>
      );
    case "quote":
      return (
        <IconBase className={className}>
          <path d="M7 9H5.5A1.5 1.5 0 0 0 4 10.5V13h4v5H5" />
          <path d="M17 9h-1.5A1.5 1.5 0 0 0 14 10.5V13h4v5h-3" />
        </IconBase>
      );
    default:
      return (
        <IconBase className={className}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2 2" />
        </IconBase>
      );
  }
}
