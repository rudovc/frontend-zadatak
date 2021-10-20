import { IProps } from "../interfaces/component-interfaces";
import { useRef, useCallback } from "react";
import { useAppDispatch } from "../hooks";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { TextFieldProps } from "@mui/material/";
import styles from "./styles/searchbar.module.scss";
import { updateFilter } from "./slices/homepage-slice";
import { isMobileOnly } from "react-device-detect";

export const SearchBar = (props: IProps) => {
  const dispatch = useAppDispatch();

  // Input in search field is part of state
  const searchBoxRef = useRef<TextFieldProps>(null);
  // Set state to be search field value
  const sendSearch = useCallback(() => {
    const input: string = searchBoxRef.current?.value as string;
    dispatch(updateFilter(input));
  }, [dispatch]);

  const handlePress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        sendSearch();
      }
    },
    [sendSearch]
  );

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <SearchIcon className={styles.searchicon} />
        <InputBase
          className={styles.searchfield}
          id="search"
          inputRef={searchBoxRef}
          placeholder="Search news"
          onChange={sendSearch}
        />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <SearchIcon className={styles.searchicon} />
        <InputBase
          className={styles.searchfield}
          id="search"
          inputRef={searchBoxRef}
          placeholder="Search news"
          onKeyDown={handlePress}
        />
        <Button
          className={styles.searchbutton}
          variant="contained"
          onClick={sendSearch}
        >
          SEARCH
        </Button>
      </div>
    );
  }
};
