import "./FollowersCard.css";

function FollowersCard(props) {
  return (
    <div className="card">
    <div className="card-body">
      <div className="name-logo">
        <div className="logo">
          <img src={props.logo} alt=""></img>
        </div>
        <div className="name ms-2">{props.userName}</div>
      </div>
      <div className="number mt-2 text-center">{props.followers}</div>
      <div className="follow">FOLLOWERS</div>
      <div className="update mt-4">
        <div className="up-icon">
          <img src={props.upDown} alt=""></img>
        </div>
        <div className="today ms-2">{props.changeInFollowers} Today</div>
      </div>
    </div>
  </div>
  );
}

export default FollowersCard;