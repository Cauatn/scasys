import { createContext, useEffect, useState } from "react";

interface ProcedimentoProp {
	id: number;
	nome: string;
	modoDeCalculo: string;
}

export const ItemsContext = createContext({
	novoProcedimento: (novoProcedimento: string, modoDeCalculo: string) => {},
	procedimentos: [],
	items: [],
});

export const ItemsProvider = ({ children }) => {
	const [procedimentos, setProcedimentos] = useState<ProcedimentoProp[]>([]);
	const [items, setItems] = useState([]);

	const novoProcedimento = (
		novoProcedimento: string,
		modoDeCalculo: string,
	) => {
		setProcedimentos((prevProcedimentos) => [
			...prevProcedimentos,
			{
				id: procedimentos.length,
				nome: novoProcedimento,
				modoDeCalculo: modoDeCalculo,
			},
		]);
	};

	return (
		<ItemsContext.Provider value={{ items, procedimentos, novoProcedimento }}>
			{children}
		</ItemsContext.Provider>
	);
};
