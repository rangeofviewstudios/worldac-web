"use client";

import { useState, useEffect } from "react";

const HUB_TIMEZONES = [
  "America/New_York",   // Johns Creek
  "America/Mexico_City", // Guadalajara
  "America/Monterrey",  // Monterrey
] as const;

function getTime(tz: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

export function HubClock({ index }: { index: number }) {
  const tz = HUB_TIMEZONES[index];
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(getTime(tz));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [tz]);

  if (!time) return null;

  return (
    <span
      className="text-[10px] font-mono tabular-nums"
      style={{ color: "#0ea5e9" }}
    >
      {time}
    </span>
  );
}
