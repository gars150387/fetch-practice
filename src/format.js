export const Format = (props) => {
  return (
    <div id={props.id}>
      <div>{props.name}</div>
      <div>{props.region}</div>
      <div>{props.country}</div>
      <div>{props.lat}</div>
      <div>{props.lon}</div>
      <div>{props.url}</div>
    </div>
  );
};
