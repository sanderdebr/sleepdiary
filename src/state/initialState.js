import theme from "~/src/common/styles/theme";

export const initialState = {
  appName: "sleepdiary",
  theme: theme.day,
  session: {
    user: null,
    activities: null,
    loading: false,
  },
};

export default initialState;
