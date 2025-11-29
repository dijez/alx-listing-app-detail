const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div >
      <h3 >Reviews</h3>
      {reviews.map((review, index) => (
        
        <div key={index} >
          <div >
            <img src={review.avatar} alt={review.name}  />
            <div>
              <p >{review.name}</p>
              <p >{review.rating} stars</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;