/**
 * API configuration helper.
 * Returns relative path by default, or VITE_API_URL if configured.
 */
export function getApiUrl(endpoint: string): string {
  const clean = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  // Optional custom backend URL defined at build time
  const envBase = (import.meta as any).env?.VITE_API_URL;
  if (envBase) {
    return `${envBase.replace(/\/$/, '')}${clean}`;
  }

  // Use standard same-origin relative path
  return clean;
}
