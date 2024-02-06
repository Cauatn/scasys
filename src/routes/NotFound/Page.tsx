
export default function NotFound() {
  return (
    <>
      <div className="inline-flex items-center gap-10 justify-center w-[100%]">
        <h1 className="text-[20em] font-bold">404</h1>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-500">
            Página não encontrada
          </h2>
          <p>Parece que a página que você está procurando não existe.</p>
        </div>
      </div>
    </>
  );
}
