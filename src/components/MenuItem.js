import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as MaterialLink } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class MenuItem extends Component {
  render() {
    return (
      <>
        {/* <div>{this.props._item.label}</div>; */}
        <ListItem
          component={this.props._item.external ? MaterialLink : Link}
          href={this.props._item.external ? this.props._item.pathname : null}
          to={
            this.props._item.external
              ? null
              : {
                  pathname: this.props._item.pathname,
                //   search: this.props._location.search,
                }
          }
          button
          key={this.props._item.label}
        >
          <ListItemText primary={this.props._item.label} />
        </ListItem>
      </>
    );
  }
}
