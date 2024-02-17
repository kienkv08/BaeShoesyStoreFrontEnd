import { useCallback, useEffect, useState } from "react";
import { Observable, Subject, take, takeUntil } from "rxjs";

export default function useObservable() {
  const [destroy$] = useState(new Subject());

  useEffect(() => {
    return () => {
      if (!destroy$.closed) {
        destroy$.next();
        destroy$.complete();
      }
    };
  }, [destroy$]);

  const subscribeOnce = useCallback((observable, callback) => {
    observable.then((observable) =>
      observable.pipe(take(1)).subscribe((data) => callback(data))
    );
  }, []);

  const subscribeUntilDestroy = useCallback(
    (observable, callback) => {
      observable.pipe(takeUntil(destroy$)).subscribe((data) => callback(data));
    },

    [destroy$]
  );

  return { subscribeOnce, subscribeUntilDestroy };
}
