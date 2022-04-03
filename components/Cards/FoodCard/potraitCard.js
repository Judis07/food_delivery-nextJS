const PortraitCard = (props) => {
  const { name, image, about, price } = props;
  return (
    <div className="card-container">
      <div>
        <div className="card-image">
          <img src={image} alt={name} />
        </div>

        <div className="card-detail">
          <div className="name">{name}</div>

          <div className="about">{about}</div>

          <div className="card-footer">
            <div className="price">{price}</div>
            <div className="card-cta">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortraitCard;
