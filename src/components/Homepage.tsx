import { useState, useRef } from "react";
import "./components.scss";
import { CategoryFrame } from "./CategoryFrame";
import { Sidebar } from "./Sidebar";
import { HomepageProps } from "./componentInterfaces";
import { TextFieldProps } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

export const Homepage = (props: HomepageProps) => {
  const searchBoxRef = useRef<TextFieldProps>(null);
  const [nameFilter, setNameFilter] = useState("");
  const handleClick = () => {
    const input: string = searchBoxRef.current?.value as string;
    setNameFilter(input);
  };

  return (
    <div className="homepage">
      <Container>
        <Stack>
          <TextField
            id="search"
            inputRef={searchBoxRef}
            placeholder="Search articles"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <Button variant="contained" onClick={handleClick}>
                  SEARCH
                </Button>
              ),
            }}
          />
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <CategoryFrame
              articles={props.categoryArticles}
              nameFilter={nameFilter}
            />
            <Sidebar />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
