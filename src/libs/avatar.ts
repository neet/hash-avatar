import ColorHash from "color-hash";

export interface Avatar {
  type: "default";
  text: string;
  color: string;
}

interface CreateAvatarOptions {
  lightness?: number;
  saturation?: number;
}

export const createAvatar = (
  fullName: string,
  options: CreateAvatarOptions = {}
): Avatar => {
  const names = fullName.trim().split(" ");

  const firstName = names[0];
  const lastName = names.length !== 1 ? names[names.length - 1] : null;

  const colorHash = new ColorHash({
    lightness: options.lightness ?? 0.5,
    saturation: options.saturation ?? 0.5,
  });

  const color = colorHash.hex(fullName);

  const text =
    firstName != null && lastName != null
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : firstName.charAt(0);

  return {
    type: "default",
    text: text,
    color,
  };
};
