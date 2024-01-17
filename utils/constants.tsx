import { Dimensions } from 'react-native';

export const size = {
    XXS: 4,
    XS: 8,
    SM: 12,
    MD: 16,
    LG: 20,
    XL: 24,
    XXL: 32,
    width: Dimensions.get('window').width
}

export const color = {
    blue: "#005CFF",
    blueLight: "#01A8FF",
    white: "#FFF",
    whiteDark: "#c1c1c1",
    primary: "#242A37",
    secondary: "#1E2432",
    bgModal: "rgba(0,0,0,0.8)",
    bgWhite: "#fff",
    orange: "#ff8500",
}

export const fontFamily = {
    bold : "SFProDisplay-Bold",
    light: "SFProDisplay-Light",
    regular : "SFProDisplay-Regular",
    neon: 'Neon',
}