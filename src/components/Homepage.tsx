import { useState, useRef } from "react";
import { CategoryFrame } from "./CategoryFrame";
import { Sidebar } from "./Sidebar";
import { HomepageProps } from "./component-interfaces";
import { TextFieldProps, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import styles from "./homepage.module.scss";

export const Homepage = (props: HomepageProps) => {
  // Input in search field is part of state
  const searchBoxRef = useRef<TextFieldProps>(null);
  const [nameFilter, setNameFilter] = useState("");
  // Set state to be search field value
  const handleClickSearch = () => {
    const input: string = searchBoxRef.current?.value as string;
    setNameFilter(input);
  };

  return (
    <div className={props.className}>
      <div className={styles.homepagebar}>
        <div className={styles.homepagebartext}>
          <Typography
            variant="h5"
            style={{ color: "#ffffff", fontWeight: "bold" }}
          >
            Make MyNews your homepage
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#ffffff", fontWeight: 100 }}
          >
            Every day discover what's trending on the internet!
          </Typography>
        </div>
        <div className={styles.homepagebuttons}>
          <Button className={styles.getbutton} variant="contained">
            GET
          </Button>
          {/* Kako sredit hover tu a da zadrzin animaciju */}
          <ButtonBase className={styles.nothanksbutton}>No, thanks</ButtonBase>
        </div>
      </div>
      <Container>
        <Stack
          spacing={3}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <div className={styles.topbar}>
            <div className={styles.title}>
              <Typography variant="h4" style={{ color: "#b71c1c" }}>
                My
              </Typography>
              <Typography variant="h4">News</Typography>
            </div>
            <div className={styles.searchbox}>
              <SearchIcon className={styles.searchicon} />
              <InputBase
                className={styles.searchfield}
                id="search"
                inputRef={searchBoxRef}
                placeholder="Search news"
              />
              <Button
                className={styles.searchbutton}
                variant="contained"
                onClick={handleClickSearch}
              >
                SEARCH
              </Button>
            </div>
          </div>
          <Stack direction="row" spacing={2} className={styles.mainframe}>
            <CategoryFrame
              className={styles.categoryframe}
              articles={props.categoryArticles}
              nameFilter={nameFilter}
            />
            <Sidebar className={styles.sidebar} />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
