import {
	Dispatch,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from "react";

interface ProcedimentoProp {
	id: number;
	nome: string;
	modoDeCalculo: string;
}

interface ItemsProp {
	fase?: string;
	etapa?: string;
	especificidade: string;
	Item: string;
}

export interface MeuContextoProps {
	items: ItemsProp[];
	procedimentos: ProcedimentoProp[];
	novoProcedimento: (novoProcedimento: string, modoDeCalculo: string) => void;
	adicionarItem: () => void;
	setItemNome: Dispatch<SetStateAction<string>>;
	setItemFase: Dispatch<SetStateAction<string>>;
	setItemEtapa: Dispatch<SetStateAction<string>>;
	setItemEspecificidade: Dispatch<SetStateAction<string>>;
}

export const ItemsContext = createContext<MeuContextoProps | undefined>(
	undefined,
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const ItemsProvider = ({ children }: unknown | any) => {
	const [procedimentos, setProcedimentos] = useState<ProcedimentoProp[]>([]);
	const [items, setItems] = useState<ItemsProp[]>([]);

	const [itemNome, setItemNome] = useState<string>("");
	const [itemFase, setItemFase] = useState<string>("");
	const [itemEtapa, setItemEtapa] = useState<string>("");
	const [itemEspecificidade, setItemEspecificidade] = useState<string>("");

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

	const adicionarItem = () => {
		setItems((prevItems) => [
			...prevItems,
			{
				fase: itemFase,
				etapa: itemEtapa,
				Item: itemNome,
				especificidade: itemEspecificidade,
			},
		]);

		console.log(items);
	};

	return (
		<ItemsContext.Provider
			value={{
				items,
				procedimentos,
				novoProcedimento,
				adicionarItem,
				setItemNome,
				setItemFase,
				setItemEtapa,
				setItemEspecificidade,
			}}
		>
			{children}
		</ItemsContext.Provider>
	);
};
