import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function TopNavbar({ toggleReturnButton = true }) {
  const navigator = useNavigate();
  return (
    <>
      <nav>
        <div className="px-6 py-5">
          <div className="flex items-center space-x-4">
            {toggleReturnButton && (
              <Button
                onClick={() => navigator(-1)}
                className="flex items-center space-x-2"
                variant="default"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Retornar</span>
              </Button>
            )}
            <div className="flex-grow">
              <h1 className="text-3xl font-bold">SCASYS</h1>
            </div>
          </div>
        </div>
      </nav>
      <section className="flex flex-col justify-between h-4/5 mx-10">
        <Outlet/>
      </section>
    </>
  );
}
