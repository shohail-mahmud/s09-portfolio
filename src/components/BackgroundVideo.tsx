import { useEffect, useRef } from "react";

const BACKGROUND_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
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
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        className="absolute h-full w-full object-cover"
        style={{ top: "300px", inset: "auto 0 0 0", opacity: 0 }}
        src={BACKGROUND_VIDEO_URL}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
    </div>
  );
}
