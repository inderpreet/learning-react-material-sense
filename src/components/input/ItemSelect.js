import { Button, Card, Menu } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { render } from "react-dom";
import FetchLineItems from "../data/FetchLineItems";

const useStyles = makeStyles((theme) => ({
  formItemSelect: {
    margin: theme.spacing(2),
    minWidth: "95vw",
    padding: 15,
  },
  itemSelector: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  addButton: {
    margin: theme.spacing(2),
    fontWeight: "bold",
  },
}));

function ItemList() {
  return FetchLineItems().map((obj, i) => {
    return (
      <MenuItem key={i} value={obj.id}>
        {obj.name}
      </MenuItem>
    );
  });
}

export default function ItemSelect() {
  const classes = useStyles();
  const [item, setItem] = React.useState("");

  const handleItemSelect = (event) => {
    setItem(event.target.value);
  };

  const handleAddButton = (event) => {
    console.log("Added " + event.target);
    if (item === "") {
      alert("Please Select Item from Dropdown");
    } else {
      alert("Added Item: " + item);
    }
  };

  return (
    <>
      <Card className={classes.formItemSelect}>
        <FormControl className={classes.itemSelector}>
          <InputLabel id="item-select-label">Item</InputLabel>
          <Select
            labelId="item-select-label"
            id="item-select"
            value={item}
            onChange={handleItemSelect}
          >
            {ItemList()}
            {/* <MenuItem value={"test"}>Leveller 1</MenuItem>
            <MenuItem value={20}>Leveller 2</MenuItem>
            <MenuItem value={30}>Restraint 1</MenuItem> */}
          </Select>
        </FormControl>
        <Button
          className={classes.addButton}
          variant="contained"
          color="primary"
          onClick={handleAddButton}
        >
          +
        </Button>
      </Card>
    </>
  );
}
