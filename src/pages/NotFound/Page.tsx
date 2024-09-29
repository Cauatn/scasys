import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col flex-wrap items-center gap-4 justify-center w-[100%]">
        <h1 className="font-bold text-[200px]">404</h1>
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-green-500">
            Página não encontrada
          </h2>
          <p>Parece que a página que você está procurando não existe.</p>
          <button
            className="text-white p-3 rounded-lg  bg-[#020817] transition-all duration-50 hover:text-lg"
            onClick={() => navigate(-1)}
          >
            Clique aqui para retornar à página anterior
          </button>
        </div>
      </div>
    </>
  );
}