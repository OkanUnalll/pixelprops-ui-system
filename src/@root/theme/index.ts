import { colors, boxShadows, opacity, typography, transition } from '@root/theme/base';

// interfaces
import { ITheme } from '@root/models/theme';

const theme: ITheme = {
    colors,
    typography,
    boxShadows,
    opacity,
    transition,
};

const darkTheme: ITheme = {
    mode: 'dark',
    body: colors.dark.main,
    text: colors.grey.light,
    ...theme,
};

const lightTheme: ITheme = {
    mode: 'light',
    body: colors.white.main,
    text: colors.dark.main,
    ...theme,
};

export * from '@root/theme/base';
export { darkTheme, lightTheme };
export default theme;