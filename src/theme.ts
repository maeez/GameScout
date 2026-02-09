// import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// const config: ThemeConfig = {
//   initialColorMode: 'dark'
// };

// const theme = extendTheme({ 
//   config,
//   colors: {
//     gray: {
//       50: '#f9f9f9',
//       100: '#ededed',
//       200: '#d3d3d3',
//       300: '#b3b3b3',
//       400: '#a0a0a0',
//       500: '#898989',
//       600: '#6c6c6c',
//       700: '#202020',
//       800: '#121212',
//       900: '#111'
//     }
//   }
//  });

// export default theme;





import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#0f0f0f" : "#f7f8fc",
      },
    }),
  },

  colors: {
    gray: {
      50: "#fafafa",
      100: "#f1f2f4",
      200: "#e4e6eb",
      300: "#cfd3db",
      400: "#9fa6b2",
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
            bg: props.colorMode === "dark" ? "#1a1a1a" : "white",
            borderRadius: "16px",
            boxShadow:
              props.colorMode === "dark"
                ? "none"
                : "0 10px 30px rgba(0,0,0,.08)",
            transition: "all .2s",

            _hover: {
              transform: "translateY(-4px)",
              boxShadow:
                props.colorMode === "dark"
                  ? "none"
                  : "0 18px 40px rgba(0,0,0,.12)",
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
            bg: props.colorMode === "dark" ? "#1e1e1e" : "#eef0f4",
            borderRadius: "12px",

            _focus: {
              borderColor: "blue.400",
              boxShadow: "0 0 0 2px rgba(66,153,225,.3)",
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
            bg: props.colorMode === "dark" ? "#1e1e1e" : "#eef0f4",
            borderRadius: "12px",
          },
        }),
      },
    },
  },
});

export default theme;
