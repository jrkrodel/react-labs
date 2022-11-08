import { Card } from "@mui/material";
import { useDrag } from "react-dnd";
export default function Task({ description, index, rowNum }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "card",
      item: { description: description, index: index, rowNum: rowNum },
    }),
    []
  );

  return (
    <Card ref={drag}>
      <p>{description}</p>
    </Card>
  );
}
