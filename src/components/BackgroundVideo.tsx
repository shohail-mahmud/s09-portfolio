import { useEffect, useRef } from "react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const LIGHT_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

const DARK_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function BackgroundVideo() {
  const { isDark } = useDarkMode();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // In dark mode: full-screen looping background, no fade choreography.
    if (isDark) {
      video.style.opacity = "1";
      void video.play();
      return;
    }

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
        void video.play();
      }, 100);
    };

    video.addEventListener("ended", handleEnded);
    void video.play();
    animationFrameRef.current = requestAnimationFrame(updateFadeOpacity);

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (restartTimeoutRef.current) window.clearTimeout(restartTimeoutRef.current);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        key={isDark ? "dark" : "light"}
        className="absolute h-full w-full object-cover"
        style={
          isDark
            ? { inset: 0, opacity: 1, willChange: "opacity" }
            : { top: "300px", inset: "auto 0 0 0", opacity: 0, willChange: "opacity" }
        }
        src={isDark ? DARK_VIDEO_URL : LIGHT_VIDEO_URL}
        autoPlay
        loop={isDark}
        muted
        defaultMuted
        playsInline
        // @ts-expect-error - non-standard but widely supported iOS attr
        webkit-playsinline="true"
        disablePictureInPicture
        disableRemotePlayback
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      {!isDark && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
      )}
      {isDark && <div className="absolute inset-0 bg-black/40" />}
    </div>
  );
}
