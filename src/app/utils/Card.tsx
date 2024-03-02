interface Props {
  children: React.ReactNode;
  position: string;
}

const Card = (props: Props) => {
  return (
    <>
      <div className="m-10" style={{ minWidth: "450px" }}>
        <div
          className="p-2"
          style={{
            backgroundColor: "rgb(34, 34, 34)",
            // borderTopLeftRadius: 10,
            // borderTopRightRadius: 10,
            color: "#f0f0f0",
            position: "sticky",
            top: 0,
          }}
        >
          {props.position}
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#f0f0f0",
            color: "#202020",
            border: "2px solid gray",
            overflowY: "scroll",
            height: 160,
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Card;
