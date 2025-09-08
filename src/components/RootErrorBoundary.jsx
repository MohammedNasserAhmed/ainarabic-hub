import React from 'react';

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('RootErrorBoundary caught an error:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const dev = import.meta?.env?.DEV;
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary">
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-6 max-w-md text-light-text-secondary dark:text-dark-text-secondary">
            An unexpected error occurred while loading the application. Try reloading the page. {dev ? 'Details are shown below for debugging.' : 'Check the browser console for details.'}
          </p>
          {dev && this.state.error && (
            <details className="max-w-xl w-full mb-6 text-left bg-black/10 dark:bg-white/10 p-4 rounded-md text-xs whitespace-pre-wrap overflow-auto" open>
              <summary className="cursor-pointer mb-2 font-semibold">Error Details</summary>
              <div>
                {String(this.state.error?.message || this.state.error)}
                {this.state.error?.stack && (
                  <pre className="mt-3 whitespace-pre-wrap">{this.state.error.stack}</pre>
                )}
              </div>
            </details>
          )}
          <button onClick={this.handleReload} className="px-6 py-3 rounded-md font-semibold bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover text-white focus-ring">
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default RootErrorBoundary;
