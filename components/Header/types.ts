/* eslint-disable import/prefer-default-export */

import PropTypes from 'prop-types';

export interface HeaderProps {
  brandName: string;
}

export const headerPropTypes = {
  brandName: PropTypes.string.isRequired,
};

/* eslint-enable import/prefer-default-export */
