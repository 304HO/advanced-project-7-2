import { useState, useEffect, useCallback } from "react";
import reviewApi from "../apis/api/review";
export type ImageType = { id: number; image: string; priority: number };

export type ReviewType = {
  id: number;
  author: {
    id: number;
    tags: {
      occupation: Array<string>;
      household: Array<string>;
      foodStyle: Array<string>;
    };
    nickname: string;
    profileImage: null | any;
    badge: null | any;
  };
  parent: null | any;
  product: {
    id: number;
    name: string;
  };
  market: string;
  content: string;
  images: Array<ImageType>;
  satisfaction: "best" | "good" | "bad" | "question";
  tags: {
    [key: string]: Array<string>;
  };
  bookmarkCount: number;
  commentCount: number;
  likeCount: number;
  viewCount: number;
  created: string;
  isActive: boolean;
  isBookmark: boolean;
  isEdit: boolean;
  isLike: boolean;
};
function useFetchMainReview(offset: number) {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<Array<ReviewType>>([]);
  console.log("useFetchMainReview", offset);
  const getReviews = useCallback(async () => {
    try {
      setLoading(true);
      const { data }: { data: Array<ReviewType> } = await reviewApi.getReview({ limit: 5, offset });
      console.log(data);
      setReviews((prev: any) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [offset]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return { loading, reviews };
}

export default useFetchMainReview;
