const Rating = ({ rating, className }) => {
  const starCount = new Array(Math.trunc(rating)).fill(1);
  starCount.push(rating - Math.trunc(rating));

  return (
    <div className={className}>
      {starCount.map((star, id) => {
        return star > 0.8 ? (
          <i className="fas fa-star" key={id} />
        ) : star > 0.3 ? (
          <i className="fas fa-star-half-alt" key={id} />
        ) : null;
      })}
    </div>
  );
};

export default Rating;
