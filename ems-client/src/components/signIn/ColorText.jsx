export function ColorText(props) {
    return (
      <div>
        <button onClick={props.route} className="font-medium text-forgetPassword">{props.text}</button>
      </div>
    );
  }