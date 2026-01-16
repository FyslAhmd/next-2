"use client";
import ReviewCard from "@/components/Cards/Reviewcard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-4">
        Total {reviews.length} Reviews
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} reviewData={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
