/* eslint-disable react/destructuring-assignment */
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // TODO: send me error mail
  }

  render() {
    if (
      (
        this.state as {
          hasError?: boolean;
        }
      )?.hasError
    ) {
      return (
        <h1>
          Opps! something is wrong here. The developers will get on it as soon
          as possible. Please file a bug report in the meantime.
        </h1>
      );
    }

    return this.props.children;
  }
}
