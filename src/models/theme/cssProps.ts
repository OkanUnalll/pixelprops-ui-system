import type * as CSS from 'csstype';

export interface ICSSProps {
    $css?: string; // custom css
    $mb?: CSS.Property.MarginBottom; // margin bottom
    $mt?: CSS.Property.MarginTop; // margin top
    $ml?: CSS.Property.MarginLeft; // margin left
    $mr?: CSS.Property.MarginRight; // margin right
    $mx?: string; // margin x
    $my?: string; // margin y
    $pb?: CSS.Property.PaddingBottom; // padding bottom
    $pt?: CSS.Property.PaddingTop; // padding top
    $pl?: CSS.Property.PaddingLeft; // padding left
    $pr?: CSS.Property.PaddingRight; // padding right
    $px?: string; // padding x
    $py?: string; // padding y
    $display?: CSS.Property.Display;
    $flexDirection?: CSS.Property.FlexDirection;
    $justifyContent?: CSS.Property.JustifyContent;
    $alignItems?: CSS.Property.AlignItems;
    $gap?: CSS.Property.Gap;
    $width?: CSS.Property.Width;
    $minWidth?: CSS.Property.MinWidth;
    $maxWidth?: CSS.Property.MaxWidth;
    $height?: CSS.Property.Height;
    $minHeight?: CSS.Property.MinHeight;
    $maxHeight?: CSS.Property.MaxHeight;
};