import React from "react";

const withLogging = (WrappedComponent) => {
  console.log("in WithLogging");
  class MyLogger extends React.Component {
    componentDidMount() {
      // Subscribe to changes
      console.log("MyLogger component has mounted");
    }

    componentWillUnmount() {
      // Clean up listener
      console.log("MyLogger component has un mounted");
    }

    render() {
      return (
        <>
          <h1>Inside Wrapped Component</h1>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
  MyLogger.displayName = "MyLogger";
  return MyLogger;
};

export default withLogging;
