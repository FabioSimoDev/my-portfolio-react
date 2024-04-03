export default function LoadingDots() {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <span className="sr-only">Thinking...</span>
      <div className="h-2 w-2 bg-primary-bg rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-primary-bg rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-primary-bg rounded-full animate-bounce"></div>
    </div>
  );
}
