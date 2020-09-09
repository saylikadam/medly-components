import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary349LineIconSvg from '../../assets/GSDD/Dietary_349_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary349LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary349LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary349LineIcon.Style = SvgIcon;
Dietary349LineIcon.displayName = 'Dietary349LineIcon';

export default Dietary349LineIcon