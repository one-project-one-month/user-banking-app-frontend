import React, { type JSX, Suspense } from "react";

export default function PageLoader<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>
) {
  return function WrappedComponent(props: P) {
    return (
      <Suspense fallback={<>Loading...</>}>
        <Component {...(props as P)} />
      </Suspense>
    );
  };
}
