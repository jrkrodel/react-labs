import { useState, useEffect } from "react";
import InventoryItem from "./InventoryItem";
import { List } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./inventory.css";
import Bag from "./Bag";
import { Grid } from "@mui/material";
export default function Inventory() {
  const [items, setItems] = useState([]);
  const [selectedItem, selectItem] = useState({});
  const [showModal, setModalOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);

  useEffect(() => {
    fetch("data/items.json").then((result) =>
      result.json().then((data) => {
        setItems(data);
      })
    );
  }, []);

  function showInfo(itemId) {
    selectItem(items[itemId]);
    setModalOpen(true);
  }

  function addItem(itemId) {
    setBagItems([...bagItems, items[itemId]]);
  }

  function removeItem(itemId) {
    const tempBag = [...bagItems];
    tempBag.splice(itemId, 1);
    setBagItems(tempBag);
  }

  const itemsList = items.map((item) => {
    return (
      <InventoryItem
        key={item.id}
        item={item}
        showInfo={showInfo}
        addItem={addItem}
      />
    );
  });

  return (
    <div>
      <Modal open={showModal} onClose={() => setModalOpen(false)}>
        <div id="infoBox">
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.desc}</p>
          <p>Weight: {selectedItem.weight}</p>
        </div>
      </Modal>
      <Grid container>
        <Grid>
          <h2>Items</h2>
          <List>{itemsList}</List>
        </Grid>
        <Grid>
          <h2>Bag</h2>
          <Bag items={bagItems} removeItem={removeItem} />
        </Grid>
      </Grid>
    </div>
  );
}
