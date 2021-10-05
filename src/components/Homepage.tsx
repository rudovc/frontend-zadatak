import "./components.scss";
import { CategoryFrame } from "./CategoryFrame";
import { Sidebar } from "./Sidebar";
import { HomepageProps } from "./componentInterfaces";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

export const Homepage = (props: HomepageProps) => {
  return (
    <div className="homepage">
      <Container>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <CategoryFrame />
          <Sidebar articles={props.data.general.articles} />
        </Stack>
      </Container>
    </div>
  );
};
