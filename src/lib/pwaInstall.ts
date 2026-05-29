// Native PWA install trigger.
// - Android/Chrome/Desktop: capture beforeinstallprompt and call prompt()
//   on the user's first interaction (gesture requirement).
// - iOS Safari: no programmatic API exists. We do nothing custom; users
//   use the browser's native Share → Add to Home Screen flow.

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const FIRED_KEY = "pwa-install-prompted";

export function setupPwaInstall() {
  if (typeof window === "undefined") return;

  // Skip inside iframes (e.g., editor preview) to avoid noise.
  try {
    if (window.self !== window.top) return;
  } catch {
    return;
  }

  // Already installed → nothing to do.
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari
    (window.navigator as unknown as { standalone?: boolean }).standalone === true;
  if (isStandalone) return;

  let deferred: BIPEvent | null = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome's default mini-infobar so we can trigger it ourselves.
    e.preventDefault();
    deferred = e as BIPEvent;
  });

  window.addEventListener("appinstalled", () => {
    deferred = null;
    try {
      sessionStorage.setItem(FIRED_KEY, "1");
    } catch {}
  });

  const tryPrompt = async () => {
    if (!deferred) return;
    try {
      if (sessionStorage.getItem(FIRED_KEY) === "1") return;
      sessionStorage.setItem(FIRED_KEY, "1");
    } catch {}
    try {
      await deferred.prompt();
      await deferred.userChoice;
    } catch {
      // Ignore — user gesture may not have qualified.
    } finally {
      deferred = null;
      removeListeners();
    }
  };

  const handler = () => {
    void tryPrompt();
  };

  const removeListeners = () => {
    window.removeEventListener("pointerdown", handler);
    window.removeEventListener("keydown", handler);
    window.removeEventListener("touchstart", handler);
  };

  window.addEventListener("pointerdown", handler, { once: true });
  window.addEventListener("keydown", handler, { once: true });
  window.addEventListener("touchstart", handler, { once: true });
}
