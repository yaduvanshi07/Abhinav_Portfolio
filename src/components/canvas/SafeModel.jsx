import { ErrorBoundary } from 'react-error-boundary'

function ModelErrorFallback({ error, resetErrorBoundary, children }) {
  return children || null
}

export function SafeModel({ children, fallback }) {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => {
        console.warn('Model loading error:', error)
        return fallback || null
      }}
      onError={(error) => {
        console.warn('Model error caught:', error)
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

