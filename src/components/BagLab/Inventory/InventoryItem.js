import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";

export default function InventoryItem(props) {
  return (
    <ListItem
      sx={{
        width: 400,
      }}
    >
      {props.item.name}
      <Button
        sx={{
          marginLeft: 5,
          marginRight: 2,
        }}
        variant="contained"
        color="primary"
        onClick={() => {
          props.addItem(props.item.id);
        }}
      >
        Add
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.showInfo(props.item.id)}
      >
        Info
      </Button>
    </ListItem>
  );
}
