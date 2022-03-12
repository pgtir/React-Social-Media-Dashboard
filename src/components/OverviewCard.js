import "./OverviewCard.css";

function OverviewCard(props) {
    return (
        <div className="card px-2">
        <div className="card-body">
           <div className="views-logo mb-4">
            <div className="views">{props.heading}</div>
             <div className="logo">
               <img src={props.logo} alt=""></img>
             </div>
        </div>
           <div className="num-percent">
            <div className="num">{props.number}</div>
             <div className="percent">
               <img src={props.upDown} alt=""></img>
               <span className="ms-2">{props.percent}</span>
             </div>
        </div>
      </div>
    </div>
    );
}

export default OverviewCard;