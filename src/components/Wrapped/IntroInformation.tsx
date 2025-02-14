import React, { useEffect } from "react";
import { loadAds } from "@/lib/ads";

function IntroInformation({
  onDemo,
}: {
  onDemo: () => void;
}) {

  useEffect(() => {
    // Trigger onDemo and loadAds immediately on page load
    onDemo();
    loadAds();
  }, []); // Empty dependency array ensures this runs once on initial load

  return null; // No UI is displayed, as the redirect or trigger happens immediately
}

export default IntroInformation;
