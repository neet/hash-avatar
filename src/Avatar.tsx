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
        borderRadius: "50%",
        boxShadow: "0 3px 6px rgba(0,0,0,.1)",

        fontWeight: "bold",
        fontSize: "42px",
        letterSpacing: "0.05em",
      }}
    >
      {avatar.text}
    </div>
  );
};
