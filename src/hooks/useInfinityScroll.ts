import { useState, useRef, useCallback, useEffect } from "react";

function useInfiniteScroll() {
  const [offset, setOffset] = useState(0);
  const loadMoreRef = useRef(null);

  const handleObserver: any = useCallback((entries: [any]) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setOffset((prev) => prev + 5);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef, offset };
}

export default useInfiniteScroll;
