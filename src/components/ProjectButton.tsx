import "../App.css";

export default function ProjectButton(props: { text: String }) {
  return (
    <button
      type="button"
      className="text-gray-300 hover:bg-yellow-400 hover:text-neutral-800 rounded-md px-3 py-2 text-2xl font-medium no-underline"
    >
      {props.text}
    </button>
  );
}
