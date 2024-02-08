import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function TopNavbar({ toggleReturnButton = true }) {
  const navigator = useNavigate();
  return (
    <>
      <nav>
        <div className="flex flex-start max-w-6xl mx-auto py-5">
          <div className="inline-flex space-x-4">
            {toggleReturnButton && (
              <div className="flex items-center space-x-4 mb-6">
                <Button
                onClick={() => navigator(-1)}
                className="flex items-center space-x-2" variant="ghost">
                  <ArrowLeftIcon className="w-5 h-5" />
                  <span>Retornar</span>
                </Button>
              </div>
            )}
						<h1 className="text-2xl font-bold ml-2">SCASYS</h1>
          </div>
        </div>
      </nav>
      <section className="flex flex-col justify-between h-4/5 mx-10">
        <Outlet/>
      </section>
    </>
    
  );
}
