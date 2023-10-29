import { colors } from '@pixelprops/theme/base/colors';
import { typography } from '@pixelprops/theme/base/typography';

// interfaces
import { ITheme } from '@pixelprops/models/theme';

const theme: ITheme = {
    colors,
    typography,
};

export * from '@pixelprops/theme/base';
export default theme;