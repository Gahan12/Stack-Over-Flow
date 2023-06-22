function Avatar(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        borderRadius: props.radius,
        color: "white",
        height: props.height,
        width: props.width,
        fontSize: props.font,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "10px",
        border: "none"
      }}
    >
      {props.name}
    </div>
  );
}

export default Avatar;
