import React from 'react';
import styles from './animated-circle.module.scss';
import classnames from 'classnames';

type AnimatedCircleProps = {
    className?: string
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ className }) => {
    return (
        <div className={classnames(className, styles.animatedCircle)} />
    );
};

export default AnimatedCircle;