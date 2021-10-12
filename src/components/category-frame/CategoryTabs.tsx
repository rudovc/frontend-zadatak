import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import MovieIcon from "@mui/icons-material/Movie";
import LocalHospitalicon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MonitorIcon from "@mui/icons-material/Monitor";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
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

  // Handle clicking on a tab, category passed as argument
  const handleClick = (category: CategoryTab) => {
    dispatch(setActiveCategoryTab(category));
  };
  console.log(styles.categorytab);

  return (
    <div>
      <Tabs orientation="vertical" value={activeTab} aria-label="Tabs">
        <Paper className={styles.categorytab}>
          <Tab
            className={styles.categorytabbutton}
            icon={<HomeIcon />}
            label="Home"
            onClick={() => {
              handleClick(CategoryTab.Home);
            }}
          />
        </Paper>
        <Paper className={styles.categorytab}>
          <Tab
            className={styles.categorytabbutton}
            icon={<WorkIcon />}
            label="Business"
            onClick={() => {
              handleClick(CategoryTab.Business);
            }}
          />
        </Paper>
        <Paper className={styles.categorytab}>
          <Tab
            className={styles.categorytabbutton}
            icon={<MovieIcon />}
            label="Entertainment"
            onClick={() => {
              handleClick(CategoryTab.Entertainment);
            }}
          />
        </Paper>
        <Paper className={styles.categorytab}>
          <Tab
            className={styles.categorytabbutton}
            icon={<LocalHospitalicon />}
            label="Health"
            onClick={() => {
              handleClick(CategoryTab.Health);
            }}
          />
        </Paper>
        <Paper className={styles.categorytab}>
          <Tab
            className={styles.categorytabbutton}
            icon={<ScienceIcon />}
            label="Science"
            onClick={() => {
              handleClick(CategoryTab.Science);
            }}
          />
        </Paper>
        <Paper className={styles.categorytab}>
          <Tab
            className={styles.categorytabbutton}
            icon={<MonitorIcon />}
            label="Technology"
            onClick={() => {
              handleClick(CategoryTab.Technology);
            }}
          />
        </Paper>
        <Paper className={styles.categorytab}>
          <Tab
            className={styles.categorytabbutton}
            icon={<SportsSoccerIcon />}
            label="Sports"
            onClick={() => {
              handleClick(CategoryTab.Sports);
            }}
          />
        </Paper>
      </Tabs>
    </div>
  );
};
