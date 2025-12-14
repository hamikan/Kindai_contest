import React, { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setP(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300"
        style={{ width: `${Math.min(1, Math.max(0, p)) * 100}%` }}
      />
    </div>
  );
}
