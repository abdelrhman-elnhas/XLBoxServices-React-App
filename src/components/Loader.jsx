const Loader = () => {
  return (
    <section className="flex items-center justify-center min-h-[70vh] py-10 bg-third-color space-x-3">
      <div className="size-3.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]"></div>
      <div className="size-3.5 animate-bounce rounded-full bg-current [animation-delay:-0.13s]"></div>
      <div className="size-3.5 animate-bounce rounded-full bg-current"></div>
    </section>
  );
};

export default Loader;
