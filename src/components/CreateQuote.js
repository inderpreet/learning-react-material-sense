import React, { Component } from "react";
import {
  Button,
  Card,
  Menu,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Topbar from "./Topbar";
import FetchLineItems from "./data/FetchLineItems";

const backgroundShape = require("../images/shape.svg");

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200,
  },
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
});

function ItemList() {
  return FetchLineItems().map((obj, i) => {
    return (
      <MenuItem key={i} value={obj.id}>
        {obj.name}
      </MenuItem>
    );
  });
}

class CreateQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
    };

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  handleAddButton(event) {
    console.log("Added " + event.target);
    if (this.state.item === "") {
      alert("Please Select Item from Dropdown");
    } else {
      alert("Added Item: " + this.state.item);
    }
  }

  handleItemSelect(event) {
    console.log("Added " + event.target);
    if (this.state.item === "") {
      alert("Please Select Item from Dropdown");
    } else {
      alert("Added Item: " + this.state.item);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Card className={classes.formItemSelect}>
              <FormControl className={classes.itemSelector}>
                <InputLabel id="item-select-label">Item</InputLabel>
                <Select
                  labelId="item-select-label"
                  id="item-select"
                  value={this.item}
                  onChange={this.handleItemSelect}
                >
                  {ItemList()}
                </Select>
              </FormControl>
              <Button
                className={classes.addButton}
                variant="contained"
                color="primary"
                onClick={this.handleAddButton}
              >
                +
              </Button>
            </Card>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(CreateQuote));
