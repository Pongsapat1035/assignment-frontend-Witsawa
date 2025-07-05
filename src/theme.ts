import { type ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#112D75",
            light: "#2952be",
            dark: "#0c2f53",
        },
        secondary: {
            main: "#c5d2ef",
            light: "#dee3ff",
            dark: "#2f2d2d",
            contrastText: "#989dad",
        },
        success: {
            main: "#20ba5b",
        },
        warning: {
            main: "#f87247",
        },
        divider: "#d9d9d9",
        error: {
            main: "#dd2628",
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontSize: 42,
        },
        h2: {
            fontSize: 32,
        },
        h3: {
            fontSize: 28,
        },
        body1: {
            fontSize: 16,
        },
        body2: {
            fontSize: 14,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "none",

                },
            },
            variants: [
                 {
                    props: { variant: "contained" },
                    style: {
                        background: 'linear-gradient(90deg,rgba(23, 54, 131, 1) 0%, rgba(88, 90, 205, 1) 100%)',
                    },
                },
                {
                    props: { variant: "outlined" },
                    style: {
                        borderColor: '#c5d2ef',
                    },
                },
                {
                    props: { variant: 'dropdownMenu' },
                    style: {
                        display: 'flex',
                        gap: '4px',
                        justifyContent: 'start',
                        fontWeight: '300',
                        borderRadius: 0,
                        padding: '8px 24px',
                        '&:hover': {
                            backgroundColor: '#E4CAFF',
                        },
                    },
                }
            ]
        }
    }
};