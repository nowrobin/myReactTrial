import "./button.scss";

interface props {
  text: string;
}

export function CustomButton(props: props) {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
}
