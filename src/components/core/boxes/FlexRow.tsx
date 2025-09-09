"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';

interface DataProps {
  className?: string;
  children?: any;
  props?: any;
  style?: any;
}

export const FlexRow: FC<DataProps> = ({ className, children, style, ...props }) => (
  <div className={`flex flex-row ${className}`} {...props} style={style} >
    {children}
  </div>
);

export const ResponsiveMdFlexRow: FC<DataProps> = ({ className, children, style, ...props }) => (
  <div className={`flex flex-col md:flex-row ${className}`} {...props} style={style} >
    {children}
  </div>
);

export const ResponsiveLgFlexRow: FC<DataProps> = ({ className, children, style, ...props }) => (
  <div className={`flex flex-col lg:flex-row ${className}`} {...props} style={style} >
    {children}
  </div>
);