import { TitleBarProps } from "../interfaces/component-interfaces";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "@mui/material/Modal";
import { SearchBar } from "./titlebar/SearchBar";
import { MenuModal } from "./MenuModal";
import { Title } from "./titlebar/Title";
import styles from "./styles/titlebar.module.scss";
import { isMobileOnly } from "react-device-detect";
import { CategoryTab } from "./tab-enums";

export const TitleBar = (props: TitleBarProps): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleCategoryTabChange = <T extends unknown>(newTab: T) => {
    if (typeof props.onCategoryTabChange !== "undefined") {
      props.onCategoryTabChange(newTab as unknown as CategoryTab);
    }
  };

  const activeTab =
    typeof props.categoryTab !== "undefined" ? props.categoryTab : 0;

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <Modal
          open={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          aria-labelledby="modal-menu"
          aria-describedby="modal-menu-categories"
        >
          <>
            {/* Ne mogu stavit animaciju tu nego moran unutar modala, sta radin krivo? */}
            <MenuModal
              className={styles.menumodal}
              onCategoryTabChange={handleCategoryTabChange}
              categoryTab={activeTab}
              onClose={() => setMenuIsOpen(false)}
            />
          </>
        </Modal>
        <div className={styles.topcontainer}>
          <Title className={styles.title} />
          <div className={styles.menucontainer}>
            <IconButton
              style={{ padding: "0px" }}
              onClick={() => setMenuIsOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <SearchBar className={styles.searchboxmobile} />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <Title className={styles.title} />
        <SearchBar className={styles.searchbox} />
      </div>
    );
  }
};
