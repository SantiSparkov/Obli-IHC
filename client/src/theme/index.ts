/**
 * Design system "Fresco" — placeholder.
 *
 * Tokens base definidos en el documento académico (CLAUDE.md). La implementación completa
 * (tipografía Nunito, escala de spacing, variantes de componentes) se completa en Entrega 2.
 */

export const colors = {
  // Marca
  sage: '#5B7A68',
  cream: '#F7F5F0',

  // Estados semánticos (badges de inventario)
  inStock: '#4CAF50',
  lowStock: '#FF9800',
  outOfStock: '#E53935',

  // Neutros
  text: '#1F2A24',
  textMuted: '#5B7A68',
  surface: '#FFFFFF',
  border: '#E5E1D8',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const typography = {
  fontFamily: 'Nunito',
} as const;

export const theme = { colors, spacing, typography } as const;
export type Theme = typeof theme;
