import { useEffect, useState } from "react";

export type ScreenSize = "mobile" | "tablet" | "desktop";

export function useScreenSize(): ScreenSize {
    const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");

    useEffect(() => {
        // Define breakpoints
        const getScreenSize = () => {
            if (window.innerWidth < 768) return "mobile";
            if (window.innerWidth < 1024) return "tablet";
            return "desktop";
        };

        // Set initial value
        setScreenSize(getScreenSize());

        // Update on resize
        const handleResize = () => setScreenSize(getScreenSize());
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
}
