import { useEffect } from "react";

function InternetConnection({ setIsOffline }) {
  useEffect(() => {
    const updateConnectionStatus = () => {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      if (connection) {
        const effectiveType = connection.effectiveType;
        if (effectiveType === "2g" || effectiveType === "slow-2g") {
          setIsOffline(true);
        } else {
          setIsOffline(false);
        }
      }
    };

    // Set the initial loading state based on connection type
    updateConnectionStatus();

    // Add event listener for connection change
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      connection.addEventListener("change", updateConnectionStatus);
    }

    // Cleanup event listener on unmount
    return () => {
      if (connection) {
        connection.removeEventListener("change", updateConnectionStatus);
      }
    };
  }, [setIsOffline]);

  return null;
}

export default InternetConnection;
