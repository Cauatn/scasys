export type ItemProp = {
	Item: string;
	especificidade: string;
	fase: string;
	etapa: string;
};

export type ProcedimentoProp = {
	id: number;
	nome: string;
	modoDeCalculo: string;
};

export type ItemsProp = {
	fase?: string;
	etapa?: string;
	especificidade: string;
	Item: string;
};

export type ItemProviderProps = {
	children: React.ReactNode;
};
