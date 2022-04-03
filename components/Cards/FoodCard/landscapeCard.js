const LandscapeCard = (props) => {
  const { name, image, about, price } = props;

  return (
    <div className="card-container ">
      <div className="landscape">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>

        <div className="card-detail">
          <div className="name">{name}</div>

          <div className="about">{about}</div>

          <div className="price">{price}</div>
        </div>

        <div className="card-cta">
          <div className="counter">
            <div className="decrease">-</div>
            <div className="number">1</div>
            <div className="increase">+</div>
          </div>
          <div className="cart">+ Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default LandscapeCard;
