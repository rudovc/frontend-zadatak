import { IProps } from "../../interfaces/component-interfaces";
import { KeyboardEvent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { TextFieldProps } from "@mui/material/";
import styles from "../styles/searchbar.module.scss";
import { updateFilter, selectNameFilter } from "../slices/homepage-slice";
import { isMobileOnly } from "react-device-detect";

export const SearchBar = (props: IProps) => {
  const dispatch = useAppDispatch();

  const currentFilter = useAppSelector(selectNameFilter);

  // Input in search field is part of state
  const searchBoxRef = useRef<TextFieldProps>(null);
  // Set state to be search field value
  const sendSearch = () => {
    const input: string = searchBoxRef.current?.value as string;
    dispatch(updateFilter(input));
  };

  if (currentFilter !== (searchBoxRef.current?.value as string)) {
    if (
      typeof searchBoxRef.current !== "undefined" &&
      searchBoxRef.current !== null
    ) {
      searchBoxRef.current.value = currentFilter;
    }
  }

  const handlePress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      sendSearch();
    }
  };

  if (isMobileOnly) {
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
