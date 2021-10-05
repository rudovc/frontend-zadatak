import React from "react";
import "./components.scss";
import { CategoryFrame } from "./CategoryFrame";
import { Sidebar } from "./Sidebar";
import { IProps } from "./componentInterfaces";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

export class Homepage extends React.Component<IProps> {
  render() {
    return (
      <div className="homepage">
        <Container>
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <CategoryFrame articles={this.props.articles} />
            <Sidebar articles={this.props.articles} />
          </Stack>
        </Container>
      </div>
    );
  }
}
