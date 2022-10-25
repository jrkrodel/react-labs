import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Slider from "@mui/material/Slider";

export default function Bag(props) {
  const itemsList = props.items.map((item, ind) => {
    return (
      <ListItem
        key={ind}
        onClick={() => {
          props.removeItem(ind);
        }}
      >
        {item.name}
      </ListItem>
    );
  });

  const weight = props.items.reduce((totalWeight, item) => {
    return totalWeight + item.weight;
  }, 0);

  return (
    <div>
      <Slider disabled={true} max={15} value={weight} />
      <div>Total Weight: {weight.toFixed(2)} nts</div>
      <List>{itemsList}</List>
    </div>
  );
}
