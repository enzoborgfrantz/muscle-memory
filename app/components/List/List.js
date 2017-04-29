import React, { Component, PropTypes } from 'react';
import styles from './List.scss';

export const ListHead = ({ children, ...events }) => (
  <div className="list-head" {...events}>
    {children}
  </div>
  );

export const ListItems = ({ children, ...events }) => (
  <div className="list-items" {...events}>
    {children}
  </div>
);

ListItems.defaultProps = {
  children: null,
};

export const ListItem = ({ children, ...events }) => (
  <span className="list-item" {...events}>
    {children}
  </span>
);

ListItem.defaultProps = {
  children: null,
};
