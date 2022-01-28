import { readableColor } from "polished";
import { Avatar as AvatarType } from "./libs/avatar";

interface AvatarProps {
  avatar: AvatarType;
}

export const Avatar = (props: AvatarProps) => {
  const { avatar } = props;

  return (
    <div
      role="image"
      aria-label={avatar.text}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: "100px",
        height: "100px",
        backgroundColor: avatar.color,
        color: readableColor(avatar.color, "#000", "#fff"),

        fontWeight: "bold",
        fontSize: "42px",
        letterSpacing: "0.05em",
        borderRadius: "50%",
      }}
    >
      {avatar.text}
    </div>
  );
};
