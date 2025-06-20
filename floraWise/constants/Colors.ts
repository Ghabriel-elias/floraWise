export type ColorsType = keyof typeof Colors.light.colors & keyof typeof Colors.dark.colors

export const Colors = {
  light: {
    colors: {
      green: '#009963',            // Verde principal (botões, ícones)
      darkGreen: '#2E7D32',        // Verde escuro (hover, destaques)
      lightGreen: '#A5D6A7',       // Verde claro (chips, fundos suaves)
      white: '#FFFFFF',            // Fundo principal
      offWhite: '#F1F8E9',         // Cards, containers
      black: '#121212',            // Texto principal
      grey: '#687076',             // Texto secundário
      lightGrey: '#BDBDBD',        // Bordas, ícones inativos
      red: '#FF6F61',              // Erros
      tabIconInactive: '#BDBDBD',
      tabIconActive: '#4CAF50',
    }
  },

  dark: {
    colors: {
      green: '#009963',            // Verde principal adaptado ao dark
      darkGreen: '#388E3C',        // Verde escuro para destaque
      lightGreen: '#A5D6A7',       // Verde bem claro, secundário
      black: '#121212',            // Fundo principal
      softBlack: '#1E1E1E',        // Cards, containers
      white: '#FFFFFF',            // Texto principal
      grey: '#9BA1A6',             // Texto secundário
      darkGrey: '#2C2C2C',         // Bordas e divisores
      red: '#FF6F61',              // Erros
      tabIconInactive: '#9BA1A6',
      tabIconActive: '#81C784',
    }
  },
}
