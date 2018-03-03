// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import get from 'lodash/get';
import { defaultProps } from './utils';

type Props = {
  className?: string,
  htmlFor?: string,
  classPrefix: string
};

class HelpBlock extends React.Component<Props> {
  static contextTypes = {
    formGroup: PropTypes.object
  };

  render() {
    const controlId = get(this.context, 'formGroup.controlId');
    const { className, htmlFor = controlId, classPrefix, ...props } = this.props;

    const classes = classNames(classPrefix, className);

    return <span {...props} className={classes} htmlFor={htmlFor} />;
  }
}

export default defaultProps({
  classPrefix: 'help-block'
})(HelpBlock);
