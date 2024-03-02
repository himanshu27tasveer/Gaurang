import "./FlippableCard.scss";

const FlippableCard = (props: { front: string; children: React.ReactNode }) => {
  return (
    <div className="card m-14">
      <p className="card-front text-3xl p-6">
        <span>
          <span style={{ color: "#5c5c5c" }} className="font-bold text-5xl">
            {props.front[0]}
          </span>
          <span style={{ fontWeight: 400, letterSpacing: 3, color: "white" }}>
            {props.front.slice(1)}
          </span>
        </span>
      </p>
      <div className="card-back">{props.children}</div>
    </div>
  );
};

export default FlippableCard;
