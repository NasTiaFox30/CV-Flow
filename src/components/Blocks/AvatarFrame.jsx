import female_avatar from "../../assets/avatars/Female_avatar.png";
import male_avatar from "../../assets/avatars/Male_avatar.png";
import { blockStyles } from "../Templates/blockStyles";

export default function AvatarFrame({ section, onUpdate, theme }) {
  const styles = blockStyles[theme]?.AvatarFrame || {};
  const avatarSrc = styles.avatar === "male" ? male_avatar : female_avatar;

  return (
    <div className={styles.container}>
      <img
        src={avatarSrc}
        alt="avatar Profile"
        className={styles.image}
      />
    </div>
  );
}