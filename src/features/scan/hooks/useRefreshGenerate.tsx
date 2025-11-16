import { useGenerateQRToPayQR } from "@/queries/scan.query";
import { useEffect, useRef, useState, useCallback } from "react";

function useRefreshGenerate(limit: number) {
  const [timeleft, setTimeleft] = useState(limit);
  const [qrToken, setQrToken] = useState<string | null>(null);

  const [isGenerating, setIsGenerating] = useState(false);

  const isRefreshingRef = useRef(false);

  const { mutateAsync: generate } = useGenerateQRToPayQR();

  const refresh = useCallback(async () => {
    if (isRefreshingRef.current) return;

    isRefreshingRef.current = true;
    setIsGenerating(true);

    try {
      const res = await generate({ fromAccountId: 0 });
      setQrToken(res.data.token);
      setTimeleft(limit);
    } catch (error) {
      console.error("QR generation failed:", error);
    } finally {
      isRefreshingRef.current = false;
      setIsGenerating(false);
    }
  }, [generate, limit]);

  useEffect(() => {
    refresh();

    const id = setInterval(() => {
      setTimeleft((prev) => {
        if (prev <= 1) {
          refresh();
          return limit;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [refresh, limit]);

  return {
    qrToken,
    timeleft,
    isPending: isGenerating,
  };
}

export default useRefreshGenerate;
