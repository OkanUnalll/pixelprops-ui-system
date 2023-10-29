import { colors } from '@root/theme/base/colors';
import { typography } from '@root/theme/base/typography';

// interfaces
import { ITheme } from '@root/models/theme';

const theme: ITheme = {
    colors,
    typography,
};

export * from '@root/theme/base';
export default theme;