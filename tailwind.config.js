/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteColor: 'hsl(0, 0%, 100%)',
        blackColor: 'hsl(0, 0%, 0)',

        // dark colors
        backgroundDark: 'hsl(260, 14%, 8%)',
        onBackgroundDark: 'hsl(280, 17%, 90%)',
        surfaceDark: 'hsl(260, 14%, 8%)',
        onSurfaceDark: 'hsl(280, 17%, 90%)',
        onSurfaceVariantDark: 'hsl(270, 11%, 79%)',
        surfaceContainerLowDark: 'hsl(264, 8%, 12%)',
        surfaceContainerDark: 'hsl(257, 10%, 14%)',
        surfaceBrightDark: 'hsl(270, 5%, 23%)',
        primaryDark: 'hsl(258, 100%, 87%)',
        onPrimaryDark: 'hsl(259, 58%, 28%)',
        outlineDark: 'hsl(264, 5%, 58%)',
        outlineVariantDark: 'hsl(264, 7%, 29%)',

        // light colors
        backgroundLight: 'hsl(293, 100%, 98%)',
        onBackgroundLight: 'hsl(264, 8%, 12%)',
        surfaceLight: 'hsl(293, 100%, 98%)',
        onSurfaceLight: 'hsl(264, 8%, 12%)',
        onSurfaceVariantLight: 'hsl(264, 7%, 29%)',
        surfaceContainerLowLight: 'hsl(278, 44%, 96%)',
        surfaceContainerLight: 'hsl(276, 38%, 95%)',
        surfaceBrightLight: 'hsl(293, 100%, 98%)',
        primaryLight: 'hsl(256, 34%, 48%)',
        onPrimaryLight: 'hsl(0, 0%, 100%)',
        outlineLight: 'hsl(270, 4%, 47%)',
        outlineVariantLight: 'hsl(270, 11%, 79%)',
      },
      fontSize: {
        baseFontSize: '62.5%',
        displayLarge: '5.7rem',
        displayMedium: '4.5rem',
        displaySmall: '3.6rem',
        headlineLarge: '3.2rem',
        headlineMedium: '2.8rem',
        headlineSmall: '2.4rem',
        titleLarge: '2rem',
        titleMedium: '1.6rem',
        titleSmall: '1.4rem',
        labelLarge: '1.4rem',
        labelMedium: '1.2rem',
        labelSmall: '1.1rem',
        bodyLarge: '1.6rem',
        bodyMedium: '1.4rem',
        bodySmall: '1.2rem',
      },
      fontWeight: {
        weightRegular: 400,
        weightMedium: 500,
      },
      borderRadius: {
        shapeCornerExtraSmall: '4px',
        shapeCornerSmall: '8px',
        shapeCornerMedium: '12px',
        shapeCornerLarge: '16px',
        shapeCornerFull: '500px',
        shapeCornerCircle: '50%'
      },
      boxShadow: {
        elevation1: '0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d',
        shadowInset: 'inset 0 0 0 1px',
      },
      padding: {
        sectionPadding: '24px',
      },
      height: {
        topBarHeight: '64px',
      },
      transitionDuration: {
        motionDurationShort1: '100ms',
        // easing
        motionEasingLinear: 'cubic-bezier(0, 0, 1, 1)',
      },
      gridColumn: {
        gridColumn : "repeat(auto-fit), minmax(260px, 1fr)"
      },
    },
  },
  plugins: [],
}