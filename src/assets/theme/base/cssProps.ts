import { ICSSProps } from '@/models/theme/base/cssProps';

/**
 * refs: https://styled-components.com/docs/basics#attaching-additional-props 
*/
const cssProps = (props: ICSSProps): string => {
    const {
        $mb, $ml, $mr, $mt, $mx, $my,
        $display, $flexDirection, $alignItems, $justifyContent, $gap,
        $width, $minWidth, $maxWidth, 
        $height, $minHeight, $maxHeight,
    } = props;

    return `
        ${($my || $mb) ? `margin-bottom: ${$my ?? $mb};` : ''}
        ${($my || $mt) ? `margin-top: ${$my ?? $mt};` : ''}
        ${($mx || $mr) ? `margin-right: ${$mx ?? $mr};` : ''}
        ${($mx || $ml) ? `margin-left: ${$mx ?? $ml};` : ''}
        ${$display ? `display: ${$display};` : ''}
        ${$flexDirection ? `flex-direction: ${$flexDirection};` : ''}
        ${$alignItems ? `align-items: ${$alignItems};` : ''}
        ${$justifyContent ? `justify-content: ${$justifyContent};` : ''}
        ${$gap ? `gap: ${$gap};` : ''}
        ${$width ? `width: ${$width};` : ''}
        ${$minWidth ? `min-width: ${$minWidth};` : ''}
        ${$maxWidth ? `max-width: ${$maxWidth};` : ''}
        ${$height ? `height: ${$height};` : ''}
        ${$minHeight ? `min-height: ${$minHeight};` : ''}
        ${$maxHeight ? `max-height: ${$maxHeight};` : ''}
    `;
};

export default cssProps;