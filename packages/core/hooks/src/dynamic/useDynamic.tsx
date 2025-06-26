import {JSX, FC, ReactNode } from "react";
import dynamic, { Loader } from "next/dynamic";
import { ErrorBoundary } from "react-error-boundary";

/**
 * @function useDynamic 
 * Wraps a dynamically imported component with loading and error fallbacks using Next.js `dynamic()`.
 * @template T - Props of the dynamic component.
 * @param loader - Dynamic import function (e.g., () => import('./Component')).
 * @param fallback - UI shown while loading.
 * @param errorFallback - UI shown on error.
 * @param ssr - Enable or disable SSR (default: true).
 * @returns A functional component with loading and error handling.
 *
 * @example
 * const Chart = useDynamic(() => import('./Chart'), <Loading />, <Error />, false);
 * return <Chart data={...} />;
*/


const useDynamic = <T extends object & JSX.IntrinsicAttributes>(
  loader: Loader<T>,
  fallback: ReactNode,
  errorFallback: ReactNode,
  ssr: boolean = true,
): FC<T> => {
  const DynamicComponent = dynamic<T>(loader, {
    ssr: ssr,
    loading: () => <>{fallback}</>,
  });
  const SuspendedComponent: FC<T> = (props: T) => (
    <ErrorBoundary FallbackComponent={() => <>{errorFallback}</>}>
        <DynamicComponent {...props} />
    </ErrorBoundary>
  );
  return SuspendedComponent;
};

export default useDynamic;