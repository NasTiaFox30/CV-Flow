import female_avatar from "../../assets/avatars/Female_avatar.png";
import male_avatar from "../../assets/avatars/Male_avatar.png";

export default function AvatarFrame() {
    return (
        <img
            src={female_avatar}
            alt="avatar Profile"
            className="h-60 w-50 object-cover mb-6"
        />
    )
}

