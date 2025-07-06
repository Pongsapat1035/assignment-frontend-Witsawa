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
        info: {
            main: '#989DAD',
        },
        error: {
            main: "#dd2628",
        },
        divider: "#d9d9d9",
        text: {
            secondary: '#2F2D2D',
            disabled: '#b3b3b3',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        fontWeightMedium: 600,
        fontWeightRegular: 500,
        h1: {
            fontSize: 42
        },
        h2: {
            fontSize: 32
        },
        h3: {
            fontSize: 28
        },
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 14
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
                    props: { variant: "containedGradient" },
                    style: {
                        color: 'white',
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
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#112D75"
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textAlign: 'right',
                    color: '#dd2628',
                    fontSize: '10px',
                    position: 'absolute',
                    bottom: -20,
                    right: 0
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: 20,
                    color: "#112D75"
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white'
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    borderColor: "#989DAD",
                    fontWeight: 300,
                    color: "#989DAD",
                    backgroundColor: "white",
                },
                previousNext: {
                    color: "#2952BE",
                    borderColor: "#2952BE",
                    fontWeight: 300,
                },
                outlined: {
                    "&.Mui-selected": {
                        backgroundColor: "#2952BE",
                        borderColor: "#2952BE",
                        color: "white",
                    },
                },
                ellipsis: {
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "default",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                    "&:focus": {
                        backgroundColor: "transparent",
                    },
                    "&:active": {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
    }
};