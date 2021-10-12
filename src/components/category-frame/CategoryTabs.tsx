import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import MovieIcon from "@mui/icons-material/Movie";
import LocalHospitalicon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MonitorIcon from "@mui/icons-material/Monitor";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/Button";
import { CategoryTab } from "../tab-enums";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  setActiveCategoryTab,
  selectActiveCategory,
} from "./category-tabs-slice";
import styles from "./categorytabs.module.scss";

export const CategoryTabs = () => {
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
  const isActiveTabStyle = (thisTab: CategoryTab) => {
    if (activeTab === thisTab) {
      return styles.categorytabactive;
    } else {
      return styles.categorytabinactive;
    }
  };

  return (
    <div className={styles.categorytablist}>
      <ButtonBase
        onClick={() => {
          handleClick(CategoryTab.Home);
        }}
      >
        <Paper elevation={paperElevation[CategoryTab.Home]}>
          <div className={isActiveTabStyle(CategoryTab.Home)}>
            <HomeIcon className={styles.categorytabicon} />
            <span>Home</span>
          </div>
        </Paper>
      </ButtonBase>

      <ButtonBase
        onClick={() => {
          handleClick(CategoryTab.Business);
        }}
      >
        <Paper elevation={paperElevation[CategoryTab.Business]}>
          <div className={isActiveTabStyle(CategoryTab.Business)}>
            <WorkIcon className={styles.categorytabicon} />
            <span>Business</span>
          </div>
        </Paper>
      </ButtonBase>

      <ButtonBase
        onClick={() => {
          handleClick(CategoryTab.Entertainment);
        }}
      >
        <Paper elevation={paperElevation[CategoryTab.Entertainment]}>
          <div className={isActiveTabStyle(CategoryTab.Entertainment)}>
            <MovieIcon className={styles.categorytabicon} />
            <span>Entertainment</span>
          </div>
        </Paper>
      </ButtonBase>

      <ButtonBase
        onClick={() => {
          handleClick(CategoryTab.Health);
        }}
      >
        <Paper elevation={paperElevation[CategoryTab.Health]}>
          <div className={isActiveTabStyle(CategoryTab.Health)}>
            <LocalHospitalicon className={styles.categorytabicon} />
            <span>Health</span>
          </div>
        </Paper>
      </ButtonBase>

      <ButtonBase
        onClick={() => {
          handleClick(CategoryTab.Science);
        }}
      >
        <Paper elevation={paperElevation[CategoryTab.Science]}>
          <div className={isActiveTabStyle(CategoryTab.Science)}>
            <ScienceIcon className={styles.categorytabicon} />
            <span>Science</span>
          </div>
        </Paper>
      </ButtonBase>

      <ButtonBase
        onClick={() => {
          handleClick(CategoryTab.Technology);
        }}
      >
        <Paper elevation={paperElevation[CategoryTab.Technology]}>
          <div className={isActiveTabStyle(CategoryTab.Technology)}>
            <MonitorIcon className={styles.categorytabicon} />
            <span>Technology</span>
          </div>
        </Paper>
      </ButtonBase>

      <ButtonBase
        onClick={() => {
          handleClick(CategoryTab.Sports);
        }}
      >
        <Paper elevation={paperElevation[CategoryTab.Sports]}>
          <div className={isActiveTabStyle(CategoryTab.Sports)}>
            <SportsSoccerIcon className={styles.categorytabicon} />
            <span>Sports</span>
          </div>
        </Paper>
      </ButtonBase>
    </div>
  );
};
