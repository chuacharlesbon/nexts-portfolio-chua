"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import { InView } from 'react-intersection-observer';

interface DataProps {
  className?: string;
  children?: any;
  props?: any;
  style?: any;
  enableIntersection?: boolean;
}

export const Div: FC<DataProps> = ({ className, children, style, ...props }) => (
  <div className={`${className}`} {...props} style={style} >
    {children}
  </div>
);

export const BlurEdgeDiv: FC<DataProps> = ({ className, children, style, ...props }) => (
  <div className={`blurred-container ${className}`} {...props} style={style} >
    <div className="blur-overlay top"></div>
    <div className="blur-overlay bottom"></div>
    <div className="blur-overlay left"></div>
    <div className="blur-overlay right"></div>
    {children}
  </div>
);

export const IntersectionObserverDiv: FC<DataProps> = ({ className, children, style, enableIntersection, ...props }) => {
  const [isSectionVisible, setSectionVisible] = useState(!(enableIntersection ?? true));
  return (
    <InView as="div" onChange={(inView) => {
      if (!isSectionVisible) {
        setTimeout(() => {
          setSectionVisible(inView);
        }, 500);
      }
    }}>
      {
        isSectionVisible
          ? <div className={`${className}`} {...props} style={style} >
            {children}
          </div>
          : <div className='w-full h-screen' />
      }
    </InView>
  )
};