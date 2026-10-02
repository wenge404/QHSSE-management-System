import {createContext, useState, useMemo} from "react"
import {createTheme} from "@mui/material/styles"
import Typography from "@mui/material/Typography"

// color design tokens
export const tokens = (mode) => ({
  ...(mode == "dark"
    ?{
      grey: {
        50: 'oklch(98.5% 0 0)',
        100: 'oklch(96.1% 0 0)',
        200: 'oklch(90.4% 0 0)',
        300: 'oklch(84.3% 0 0)',
        400: 'oklch(67.1% 0 0)',
        500: 'oklch(51% 0 0)',
        600: 'oklch(40.2% 0 0)',
        700: 'oklch(34.4% 0 0)',
        800: 'oklch(25.1% 0 0)',
        900: 'oklch(19.6% 0 0)',
        950: 'oklch(14.5% 0 0)',
      },
      primary: {
        50: 'oklch(98.5% 0.002 248.883)',
        100: 'oklch(96.9% 0.003 265.586)',
        200: 'oklch(93.1% 0.006 265.575)',
        300: 'oklch(87.7% 0.01 259.382)',
        400: 'oklch(71.3% 0.021 262.369)',
        500: 'oklch(55.9% 0.026 265.408)',
        600: 'oklch(45.5% 0.029 257.846)',
        700: 'oklch(38.4% 0.033 260.777)',
        800: 'oklch(29% 0.032 257.892)',
        900: 'oklch(22.4% 0.033 265.709)',
        950: 'oklch(13% 0.027 262.736)',
       },
      greenAccent: {
        50: 'oklch(98.4% 0.011 171.207)',
        100: 'oklch(95.1% 0.042 171.288)',
        200: 'oklch(90.7% 0.078 170.913)',
        300: 'oklch(85% 0.113 171.558)',
        400: 'oklch(77.1% 0.124 172.399)',
        500: 'oklch(69.9% 0.114 172.99)',
        600: 'oklch(59.6% 0.096 175.191)',
        700: 'oklch(50.8% 0.078 176.878)',
        800: 'oklch(43.5% 0.064 178.703)',
        900: 'oklch(38.5% 0.052 178.903)',
        950: 'oklch(27.7% 0.038 183.011)',
        },
      redAccent: {
          50: 'oklch(97.1% 0.01 17.772)',
          100: 'oklch(93.2% 0.024 18.109)',
          200: 'oklch(87.7% 0.046 18.726)',
          300: 'oklch(79.6% 0.085 19.963)',
          400: 'oklch(68.8% 0.142 22.608)',
          500: 'oklch(61.7% 0.176 25.723)',
          600: 'oklch(56.1% 0.182 27.717)',
          700: 'oklch(49.3% 0.159 27.91)',
          800: 'oklch(43.6% 0.132 27.291)',
          900: 'oklch(39.2% 0.105 26.115)',
          950: 'oklch(25.8% 0.068 26.434)',
          },
     } 
     : {
      grey: {
         50: 'oklch(14.5% 0 0)',
         100: 'oklch(19.6% 0 0)',
         200: 'oklch(25.1% 0 0)',
         300: 'oklch(34.4% 0 0)',
         400: 'oklch(40.2% 0 0)',
         500: 'oklch(51% 0 0)',
         600: 'oklch(67.1% 0 0)',
         700: 'oklch(84.3% 0 0)',
         800: 'oklch(90.4% 0 0)',
         900: 'oklch(96.1% 0 0)',
         950: 'oklch(98.5% 0 0)',
        },
      primary: {
        50: 'oklch(13% 0.027 262.736)',
        100: 'oklch(22.4% 0.033 265.709)',
        200: 'oklch(29% 0.032 257.892)',
        300: 'oklch(38.4% 0.033 260.777)',
        400: 'oklch(45.5% 0.029 257.846)',
        500: 'oklch(55.9% 0.026 265.408)',
        600: 'oklch(71.3% 0.021 262.369)',
        700: 'oklch(87.7% 0.01 259.382)',
        800: 'oklch(93.1% 0.006 265.575)',
        900: 'oklch(96.9% 0.003 265.586)',
        950: 'oklch(98.5% 0.002 248.883)',
       },
      greenAccent: {
        50: 'oklch(27.7% 0.038 183.011)',
        100: 'oklch(38.5% 0.052 178.903)',
        200: 'oklch(43.5% 0.064 178.703)',
        300: 'oklch(50.8% 0.078 176.878)',
        400: 'oklch(59.6% 0.096 175.191)',
        500: 'oklch(69.9% 0.114 172.99)',
        600: 'oklch(77.1% 0.124 172.399)',
        700: 'oklch(85% 0.113 171.558)',
        800: 'oklch(90.7% 0.078 170.913)',
        900: 'oklch(95.1% 0.042 171.288)',
        950: 'oklch(98.4% 0.011 171.207)',
        },
      redAccent: {
          50: 'oklch(25.8% 0.068 26.434)',
          100: 'oklch(39.2% 0.105 26.115)',
          200: 'oklch(43.6% 0.132 27.291)',
          300: 'oklch(49.3% 0.159 27.91)',
          400: 'oklch(56.1% 0.182 27.717)',
          500: 'oklch(61.7% 0.176 25.723)',
          600: 'oklch(68.8% 0.142 22.608)',
          700: 'oklch(79.6% 0.085 19.963)',
          800: 'oklch(87.7% 0.046 18.726)',
          900: 'oklch(93.2% 0.024 18.109)',
          950: 'oklch(97.1% 0.01 17.772)',
          },
     }),
})

/* Material UI theme settings */
export const themeSettings = (mode) => {
  const colors = tokens(mode)

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            }, 
            background: {
              default: colors.primary[500],
            }
         } :{
          primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            }, 
            background: {
              default: "#fcfcfc",
            }
         }
      )
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    }
  }
} 

/* React context for color mode */
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

export const useMode = () => {
  const [mode, setMode] = useState("dark")

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return [theme, colorMode]
}