export const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#7c3aed',
    background: '#f8fafc',
    white: '#ffffff',
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
      muted: '#718096',
      light: '#64748b'
    },
    border: '#e2e8f0',
    borderLight: '#cbd5e1',
    accent: {
      blue: '#eff6ff',
      gray: '#f1f5f9',
      slate: '#f8fafc'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
    xxxxl: '48px',
    xxxxxl: '60px'
  },
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '20px',
    full: '50%'
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 25px rgba(0,0,0,0.08)',
    lg: '0 20px 60px rgba(0,0,0,0.25)',
    header: '0 2px 20px rgba(0,0,0,0.1)'
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    sizes: {
      xs: '12px',
      sm: '13px',
      base: '14px',
      lg: '15px',
      xl: '16px',
      xxl: '18px',
      xxxl: '20px',
      xxxxl: '22px',
      xxxxxl: '24px',
      xxxxxxl: '26px',
      xxxxxxxl: '42px'
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    }
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
} as const;

export const commonStyles = {
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    fontFamily: theme.typography.fontFamily
  },
  header: {
    backgroundColor: theme.colors.white,
    boxShadow: theme.shadows.header,
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: `1px solid ${theme.colors.border}`,
    backdropFilter: 'blur(20px)'
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${theme.spacing.xl}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px'
  },
  logo: {
    fontSize: theme.typography.sizes.xxxxxl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text.primary,
    cursor: 'pointer'
  },
  navLinks: {
    display: 'flex',
    gap: theme.spacing.xxxxl,
    listStyle: 'none' as const,
    margin: 0,
    padding: 0
  },
  navLink: {
    color: theme.colors.text.secondary,
    textDecoration: 'none',
    fontWeight: theme.typography.weights.medium,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.sm,
    transition: 'all 0.2s',
    cursor: 'pointer',
    fontSize: theme.typography.sizes.base
  },
  activeNavLink: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.accent.blue
  },
  section: {
    minHeight: '100vh',
    padding: `${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xl}`,
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.xxxxxxxl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: theme.spacing.xxxxxl,
    position: 'relative' as const
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xxxl,
    marginBottom: theme.spacing.xxl,
    boxShadow: theme.shadows.md,
    border: `1px solid ${theme.colors.border}`,
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  button: {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      border: 'none',
      borderRadius: theme.borderRadius.md,
      padding: `${theme.spacing.md} ${theme.spacing.lg}`,
      cursor: 'pointer',
      fontWeight: theme.typography.weights.medium,
      transition: 'all 0.2s'
    },
    secondary: {
      backgroundColor: theme.colors.white,
      color: theme.colors.text.primary,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.md,
      padding: `${theme.spacing.md} ${theme.spacing.lg}`,
      cursor: 'pointer',
      fontWeight: theme.typography.weights.medium,
      transition: 'all 0.2s'
    }
  },
  tag: {
    backgroundColor: theme.colors.accent.gray,
    color: theme.colors.text.secondary,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.typography.sizes.sm,
    fontWeight: theme.typography.weights.medium,
    border: `1px solid ${theme.colors.border}`,
    transition: 'all 0.2s ease',
    cursor: 'default'
  }
} as const;
