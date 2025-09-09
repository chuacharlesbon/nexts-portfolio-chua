"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';

interface DataProps {
  className?: string;
  children?: any;
  props?: any;
  style?: any;
}

export const FlexColumn: FC<DataProps> = ({ className, children, style, ...props }) => (
  <div className={`flex flex-col ${className}`} {...props} style={style} >
    {children}
  </div>
);