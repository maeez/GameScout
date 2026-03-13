import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#0f0f0f" : "#f4f5f7",
        color: props.colorMode === "dark" ? "#e0e0e0" : "#1a1a2e",
      },
    }),
  },

  colors: {
    gray: {
      50:  "#f4f5f7",
      100: "#eceef2",
      200: "#dde0e8",
      300: "#c4c9d6",
      400: "#9aa0b4",
      500: "#6b7280",
      600: "#4b5563",
      700: "#1f2933",
      800: "#121212",
      900: "#0b0b0b",
    },
  },

  components: {
    Card: {
      variants: {
        elevated: (props: any) => ({
          container: {
            bg: props.colorMode === "dark" ? "#1a1a1a" : "#ffffff",
            borderRadius: "12px",
            borderWidth: "1px",
            borderColor:
              props.colorMode === "dark" ? "transparent" : "#e2e4eb",
            boxShadow:
              props.colorMode === "dark"
                ? "none"
                : "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
            transition: "all 0.2s ease",

            _hover: {
              transform: "translateY(-3px)",
              boxShadow:
                props.colorMode === "dark"
                  ? "none"
                  : "0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)",
              borderColor:
                props.colorMode === "dark" ? "transparent" : "#c8ccd8",
            },
          },
        }),
      },

      defaultProps: {
        variant: "elevated",
      },
    },

    Input: {
      defaultProps: {
        variant: "filled",
      },

      variants: {
        filled: (props: any) => ({
          field: {
            bg: props.colorMode === "dark" ? "#1e1e1e" : "#eceef2",
            borderRadius: "8px",
            border: "1px solid",
            borderColor:
              props.colorMode === "dark" ? "transparent" : "#dde0e8",
            fontSize: "14px",

            _focus: {
              bg: props.colorMode === "dark" ? "#1e1e1e" : "#ffffff",
              borderColor: "#4f6ef7",
              boxShadow: "0 0 0 2px rgba(79,110,247,0.15)",
            },

            _hover: {
              bg: props.colorMode === "dark" ? "#252525" : "#e6e9f0",
              borderColor:
                props.colorMode === "dark" ? "transparent" : "#c4c9d6",
            },
          },
        }),
      },
    },

    Select: {
      defaultProps: {
        variant: "filled",
      },

      variants: {
        filled: (props: any) => ({
          field: {
            bg: props.colorMode === "dark" ? "#1e1e1e" : "#eceef2",
            borderRadius: "8px",
            border: "1px solid",
            borderColor:
              props.colorMode === "dark" ? "transparent" : "#dde0e8",
            fontSize: "14px",

            _hover: {
              bg: props.colorMode === "dark" ? "#252525" : "#e6e9f0",
              borderColor:
                props.colorMode === "dark" ? "transparent" : "#c4c9d6",
            },
          },
        }),
      },
    },

    Button: {
      baseStyle: {
        borderRadius: "8px",
        fontWeight: "500",
        fontSize: "14px",
      },
      variants: {
        ghost: (props: any) => ({
          _hover: {
            bg:
              props.colorMode === "dark"
                ? "#1e1e1e"
                : "#eceef2",
          },
        }),
        solid: (props: any) => ({
          bg: props.colorMode === "dark" ? "#2a2a2a" : "#1a1a2e",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "#333" : "#2d2d4e",
            transform: "translateY(-1px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        }),
      },
    },

   Menu: {
  baseStyle: (props: any) => ({
    list: {
      bg: props.colorMode === "dark" ? "#1a1a1a" : "#ffffff",
      borderColor: props.colorMode === "dark" ? "#2a2a2a" : "#e2e4eb",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.08)",
      overflow: "hidden",
      padding: "4px",
    },
    item: {
      bg: "transparent",
      color: props.colorMode === "dark" ? "#e0e0e0" : "#1a1a2e",
      borderRadius: "6px",
      fontSize: "14px",
      _hover: {
        bg: props.colorMode === "dark" ? "#252525" : "#f4f5f7",
      },
    },
  }),
},
    
    Drawer: {
  baseStyle: (props: any) => ({
    dialog: {
      bg: props.colorMode === "dark" ? "#0b0b0b" : "#ffffff",
      borderRight: props.colorMode === "dark" ? "1px solid #2a2a2a" : "1px solid #e2e4eb",
      boxShadow: "4px 0 24px rgba(0,0,0,0.08)",
    },
    header: {
      color: props.colorMode === "dark" ? "#e0e0e0" : "#0b0b0b",
      borderBottomWidth: "1px",
      borderColor: props.colorMode === "dark" ? "#0b0b0b" : "#fff",
    },
    body: {
      bg: props.colorMode === "dark" ? "#0b0b0b" : "#ffffff",
    },
    closeButton: {
      color: props.colorMode === "dark" ? "#e0e0e0" : "#1a1a2e",
      _hover: {
        bg: props.colorMode === "dark" ? "#252525" : "#f4f5f7",
      },
    },
  }),
},

    Heading: {
      baseStyle: (props: any) => ({
        color: props.colorMode === "dark" ? "#ffffff" : "#1a1a2e",
        fontWeight: "700",
        letterSpacing: "-0.02em",
      }),
    },

    Text: {
      baseStyle: (props: any) => ({
        color: props.colorMode === "dark" ? "#a0a0a0" : "#4b5563",
      }),
    },
  },
});

export default theme;