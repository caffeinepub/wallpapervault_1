import { useCallback, useEffect, useState } from "react";
import { useActor } from "./useActor";

export function useDownloadCounts() {
  const { actor, isFetching } = useActor();
  const [counts, setCounts] = useState<Map<number, number>>(new Map());

  // Load all counts on mount (once actor is ready)
  useEffect(() => {
    if (!actor || isFetching) return;

    actor
      .getAllDownloadCounts()
      .then((pairs) => {
        const map = new Map<number, number>();
        for (const [id, count] of pairs) {
          map.set(Number(id), Number(count));
        }
        setCounts(map);
      })
      .catch(() => {
        // Silently ignore — counts will just show as 0
      });
  }, [actor, isFetching]);

  const getCount = useCallback(
    (id: number): number => {
      return counts.get(id) ?? 0;
    },
    [counts],
  );

  const increment = useCallback(
    (id: number): void => {
      // Optimistic update — immediately reflect in UI
      setCounts((prev) => {
        const next = new Map(prev);
        next.set(id, (next.get(id) ?? 0) + 1);
        return next;
      });

      // Fire-and-forget backend call
      if (actor) {
        actor.incrementDownloadCount(BigInt(id)).catch(() => {
          // Rollback optimistic update on failure
          setCounts((prev) => {
            const next = new Map(prev);
            const current = next.get(id) ?? 0;
            if (current > 0) {
              next.set(id, current - 1);
            }
            return next;
          });
        });
      }
    },
    [actor],
  );

  return { getCount, increment };
}
