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
  const animationFrameRef = useRef<number | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);

  // Kick off playback for both videos once mounted so switching is instant.
  useEffect(() => {
    void lightRef.current?.play().catch(() => undefined);
    void darkRef.current?.play().catch(() => undefined);
  }, []);

  // Pause the inactive video to save CPU/battery; resume the active one.
  useEffect(() => {
    const active = isDark ? darkRef.current : lightRef.current;
    const inactive = isDark ? lightRef.current : darkRef.current;
    if (active) void active.play().catch(() => undefined);
    if (inactive) inactive.pause();
  }, [isDark]);

  // Fade choreography for the LIGHT video only (dark loops cleanly).
  useEffect(() => {
    const video = lightRef.current;
    if (!video) return;

    const fadeDuration = 0.5;

    const updateFadeOpacity = () => {
      const { currentTime, duration } = video;
      if (Number.isFinite(duration) && duration > 0) {
        let opacity = 1;
        if (currentTime <= fadeDuration) {
          opacity = Math.max(0, currentTime / fadeDuration);
        } else if (duration - currentTime <= fadeDuration) {
          opacity = Math.max(0, (duration - currentTime) / fadeDuration);
        }
        video.style.opacity = opacity.toString();
      }
      animationFrameRef.current = requestAnimationFrame(updateFadeOpacity);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      if (restartTimeoutRef.current) window.clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = window.setTimeout(() => {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      }, 100);
    };

    video.addEventListener("ended", handleEnded);
    animationFrameRef.current = requestAnimationFrame(updateFadeOpacity);

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (restartTimeoutRef.current) window.clearTimeout(restartTimeoutRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Light-mode video — kept mounted, hidden in dark mode */}
      <video
        ref={lightRef}
        className="absolute h-full w-full object-cover"
        style={{
          top: "300px",
          inset: "auto 0 0 0",
          opacity: 0,
          willChange: "opacity",
          visibility: isDark ? "hidden" : "visible",
        }}
        src={LIGHT_VIDEO_URL}
        loop={false}
        {...sharedVideoProps}
        {...iosAttr}
      />

      {/* Dark-mode video — kept mounted, hidden in light mode */}
      <video
        ref={darkRef}
        className="absolute h-full w-full object-cover"
        style={{
          inset: 0,
          willChange: "opacity",
          visibility: isDark ? "visible" : "hidden",
        }}
        src={DARK_VIDEO_URL}
        loop
        {...sharedVideoProps}
        {...iosAttr}
      />

      {!isDark && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
      )}
      {isDark && <div className="absolute inset-0 bg-black/40" />}
    </div>
  );
}
