// Polyfill to prevent localStorage errors during SSR
if (typeof window === 'undefined') {
  // Server-side: Create a no-op localStorage
  (global as any).localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0,
  };
}

