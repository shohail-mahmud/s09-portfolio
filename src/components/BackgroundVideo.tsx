import { useEffect, useRef } from "react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const LIGHT_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

const DARK_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

const sharedVideoProps = {
  autoPlay: true,
  muted: true,
  playsInline: true,
  preload: "auto" as const,
  disablePictureInPicture: true,
  disableRemotePlayback: true,
  "aria-hidden": true,
  tabIndex: -1,
};

const iosAttr = { "webkit-playsinline": "true" } as Record<string, string>;

export default function BackgroundVideo() {
  const { isDark } = useDarkMode();
  const lightRef = useRef<HTMLVideoElement | null>(null);
  const darkRef = useRef<HTMLVideoElement | null>(null);
  // Warm up both videos immediately so theme switching doesn't wait for a new request.
  useEffect(() => {
    lightRef.current?.load();
    darkRef.current?.load();
    void lightRef.current?.play().catch(() => undefined);
    void darkRef.current?.play().catch(() => undefined);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Light-mode video — kept mounted, hidden in dark mode */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 1, pointerEvents: "none" }}
      >
        <video
          ref={lightRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0, willChange: "opacity" }}
          src={LIGHT_VIDEO_URL}
          loop={false}
          {...sharedVideoProps}
          {...iosAttr}
        />
      </div>

      {/* Dark-mode video — kept mounted, hidden in light mode */}
      <video
        ref={darkRef}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          willChange: "opacity",
          pointerEvents: "none",
        }}
        src={DARK_VIDEO_URL}
        loop
        {...sharedVideoProps}
        {...iosAttr}
      />

      {isDark && <div className="absolute inset-0 bg-black/40" />}
    </div>
  );
}
