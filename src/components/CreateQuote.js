import React, { Component } from "react";
import {
  Button,
  Card,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Table,
  Paper,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
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
    paddingBottom: 30,
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
  tableStyle: {
    minWidth: 650,
    // margin: 20,
    width: "95vw",
  },
});

function ItemList() {
  return FetchLineItems().map((obj, i) => {
    return (
      <MenuItem key={i} value={obj}>
        {obj.name}
      </MenuItem>
    );
  });
}

class CreateQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 0,
        name: "Select Item",
        price_cad: 0.0,
        description: "blank",
      },
      quoteList: [
        {
          id: 123456,
          name: "Leveller2",
          price_cad: 4096,
          description: "Test Line Item",
        },
      ],
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
    console.log("Added ");
    console.log(event.target);
    if (event.target === {}) {
      alert("Please Select Item from Dropdown");
    } else {
      alert("Added Item: " + JSON.stringify(event.target.value));
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
            {/* InputForm */}
            <Card className={classes.formItemSelect}>
              <FormControl className={classes.itemSelector}>
                <InputLabel id="item-select-label">Item</InputLabel>
                <Select
                  labelId="item-select-label"
                  id="item-select"
                  value=""
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
            {/* Item List */}
            <TableContainer component={Paper} className={classes.tableStyle}>
              <Table className={classes.tableStyle} aria-label="Quote">
                <TableHead>
                  <TableRow>
                    <TableCell>Select</TableCell>
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Item Name</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="right">Currency</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.quoteList.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="left">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="right">CAD</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(CreateQuote));
