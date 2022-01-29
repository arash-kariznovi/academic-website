import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={style.nav}>
      <ul className={style.navBar}>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Publications</li>
        <li>CV</li>
      </ul>
    </div>
  );
};
export default Navigation;
