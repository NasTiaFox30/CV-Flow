import { useRef } from "react";
import female_avatar from "../../assets/avatars/Female_avatar.png";
import male_avatar from "../../assets/avatars/Male_avatar.png";
import { blockStyles } from "../Templates/blockStyles";

export default function AvatarFrame({ section, onUpdate, theme }) {
  const styles = blockStyles[theme]?.AvatarFrame || {};
  const fileInputRef = useRef(null);

  const avatarSrc = section.image || (styles.avatar === "male" ? male_avatar : female_avatar);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const newImage = event.target.result;
      onUpdate({ ...section, image: newImage });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`${styles.container} group relative z-10`}>
      <img
        src={avatarSrc}
        alt="avatar Profile"
        className={`${styles.image} cursor-pointer transition-transform duration-200 group-hover:scale-105`}
        onClick={handleImageClick}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs bg-black/60 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Change photo
      </div>
    </div>
  );
}