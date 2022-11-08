import { Card } from "@mui/material";
import { useDrag } from "react-dnd";
export default function Task({ description, index, rowNum }) {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: "card",
      item: { description: description, index: index, rowNum: rowNum },
    };
  }, []);
  console.log(isDragging);
  return (
    <Card ref={drag}>
      <p>{description}</p>
    </Card>
  );
}
