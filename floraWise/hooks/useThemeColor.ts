import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  colorName: keyof typeof Colors.light.colors & keyof typeof Colors.dark.colors
) {
  const theme = useColorScheme() ?? 'light';

  return Colors[theme].colors[colorName];
}
