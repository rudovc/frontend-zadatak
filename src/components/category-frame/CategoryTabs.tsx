import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LocalHospitalicon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MonitorIcon from "@mui/icons-material/Monitor";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ButtonBase from "@mui/material/Button";
import { CategoryTab } from "../tab-enums";
import { IProps } from "../component-interfaces";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  setActiveCategoryTab,
  selectActiveCategory,
} from "./category-tabs-slice";
import styles from "./categorytabs.module.scss";

export const CategoryTabs = (props: IProps) => {
  // Active tab is part of redux store b/c it is shared between App (which uses it to filter the articles) and CategoryTabs
  const activeTab = useAppSelector(selectActiveCategory);
  const dispatch = useAppDispatch();

  const paperElevation = [0, 0, 0, 0, 0, 0, 0].map((elevation, index) => {
    if (index === activeTab) {
      return 1;
    } else {
      return 0;
    }
  });

  // Handle clicking on a tab, category passed as argument
  const handleClick = (category: CategoryTab) => {
    dispatch(setActiveCategoryTab(category));
  };

  // Return active tab style only if this tab is active
  const isActiveTabStyle = (thisTab: CategoryTab): string[] => {
    if (activeTab === thisTab) {
      return [styles.categorytabbackgroundactive, styles.categorytabactive];
    } else {
      return [styles.categorytabbackgroundinactive, styles.categorytabinactive];
    }
  };

  return (
    
    <div className={props.className}>
      <div
        className={isActiveTabStyle(CategoryTab.Home)[0]}
      >
        <ButtonBase
          onClick={() => {
            handleClick(CategoryTab.Home);
          }}
          style={{ width: "100%", height:"100%", padding:"0px" }}
        >
          <div className={isActiveTabStyle(CategoryTab.Home)[1]}>
            <HomeIcon className={styles.categorytabicon}/>
            <span>Home</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={isActiveTabStyle(CategoryTab.General)[0]}
        
      >
        <ButtonBase
          onClick={() => {
            handleClick(CategoryTab.General);
          }}
          style={{ width: "100%", height:"100%", padding:"0px" }}
        >
          <div className={isActiveTabStyle(CategoryTab.General)[1]}>
            TODO:ICON
            <span>General</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={isActiveTabStyle(CategoryTab.Business)[0]}
        
      >
        <ButtonBase
          onClick={() => {
            handleClick(CategoryTab.Business);
          }}
          style={{ width: "100%", height:"100%", padding:"0px" }}
        >
          <div className={isActiveTabStyle(CategoryTab.Business)[1]}>
            <WorkIcon className={styles.categorytabicon} />
            <span>Business</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={isActiveTabStyle(CategoryTab.Health)[0]}
       
      >
        <ButtonBase
          onClick={() => {
            handleClick(CategoryTab.Health);
          }}
          style={{ width: "100%", height:"100%", padding:"0px" }}
        >
          <div className={isActiveTabStyle(CategoryTab.Health)[1]}>
            <LocalHospitalicon className={styles.categorytabicon} />
            <span>Health</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={isActiveTabStyle(CategoryTab.Science)[0]}
       
      >
        <ButtonBase
          onClick={() => {
            handleClick(CategoryTab.Science);
          }}
          style={{ width: "100%", height:"100%", padding:"0px" }}
        >
          <div className={isActiveTabStyle(CategoryTab.Science)[1]}>
            <ScienceIcon className={styles.categorytabicon} />
            <span>Science</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={isActiveTabStyle(CategoryTab.Sports)[0]}
      >
        <ButtonBase
          onClick={() => {
            handleClick(CategoryTab.Sports);
          }}
          style={{ width: "100%", height:"100%", padding:"0px" }}
        >
          <div className={isActiveTabStyle(CategoryTab.Sports)[1]}>
            <SportsSoccerIcon className={styles.categorytabicon} />
            <span>Sports</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={isActiveTabStyle(CategoryTab.Technology)[0]}
      >
        <ButtonBase
          onClick={() => {
            handleClick(CategoryTab.Technology);
          }}
          style={{ width: "100%", height:"100%", padding:"0px" }}
        >
          <div className={isActiveTabStyle(CategoryTab.Technology)[1]}>
            <MonitorIcon className={styles.categorytabicon} />
            <span>Technology</span>
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};
