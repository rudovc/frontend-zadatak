import { MenuModalProps } from "../interfaces/component-interfaces";
import { Title } from "./titlebar/Title";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { CategoryTabs } from "./category-frame/CategoryTabs";
import { SearchBar } from "./titlebar/SearchBar";
import { CategoryTab } from "./tab-enums";
import styles from "./styles/menumodal.module.scss";

export const MenuModal = (props: MenuModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      props.onClose();
    }, 200);
  };

  const handleClick = <T extends unknown>(category: T) => {
    if (typeof props.onCategoryTabChange !== "undefined") {
      props.onCategoryTabChange(category as unknown as CategoryTab);
    }
  };

  return (
    <div className={props.className}>
      <Slide direction="left" in={isOpen} timeout={150}>
        <div className={styles.modalbackground}>
          <div className={styles.buttoncontainer}>
            <IconButton style={{ padding: "0px" }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className={styles.menucontainer}>
            <Title className={styles.title} titleSize="large" />
            <SearchBar className={styles.searchboxmobile} />
            {/* Ovi tabovi mi ne odgovaraju dizajnu... Ne znan ih poravnat livo */}
            <CategoryTabs
              className={styles.categorytabsmobile}
              onClick={handleClick}
              value={props.categoryTab}
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};
