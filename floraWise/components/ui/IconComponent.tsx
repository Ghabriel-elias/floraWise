import { ColorsType } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type IconNamesType = keyof typeof MaterialCommunityIcons.glyphMap;

export function IconComponent({iconName, size, color}: {iconName: IconNamesType, size: number, color: ColorsType}) {
  const colorScheme = useThemeColor(color);
  return <MaterialCommunityIcons color={colorScheme} name={iconName} size={size} />;
}