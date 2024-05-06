import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
type props = {
	id: string;
	label: string;
	type: string;
	placeHolder: string;
};
export const InputTag: React.FC<props> = ({ id, label, type, placeHolder }) => {
	return (
		<>
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} type={type} placeholder={placeHolder} />
		</>
	);
};
