import Column from "./Column";

export default function Board() {
  const columns = ["To Do", "In Progress", "Done"];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {columns.map((col) => (
        <Column key={col} title={col} />
      ))}
    </div>
  );
}
