import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { InputTag } from "./InputTag";
type props = {
	title: string;
	description: string;
	fieldRequirment: Array<fieldData>;
	buttonTitle: string;
};
type fieldData = {
	label: string;
	id: string;
	type: string;
	placeHolder: string;
};
export const LoginSignupCard: React.FC<props> = ({
	title,
	description,
	fieldRequirment,
	buttonTitle,
}) => {
	return (
		<>
			<Card className="text-left">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					{fieldRequirment?.map((fields, index) => (
						<div key={index}>
							<InputTag
								id={fields?.id}
								label={fields?.label}
								type={fields?.type}
								placeHolder={fields?.placeHolder}
							/>
						</div>
					))}
					<Button>{buttonTitle}</Button>
				</CardContent>
			</Card>
		</>
	);
};
