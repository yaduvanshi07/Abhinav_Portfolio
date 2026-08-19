import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-[#09090B] text-white p-6">
          <div className="text-center bg-[#18181B]/80 border border-white/10 p-8 rounded-2xl max-w-md backdrop-blur-md shadow-card space-y-4">
            <h1 className="text-2xl font-bold font-heading text-white">Something went wrong</h1>
            <p className="text-secondary text-sm font-light">An unexpected error occurred while loading this view.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#3B82F6] hover:bg-[#60A5FA] px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-md text-sm font-heading cursor-pointer"
            >
              Refresh Application
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

