import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface TextProps {
	children: ReactNode;
	className?: string | [];
}

export const Text = ({ children, className }: TextProps) => {
	const classes = cn(`text-sky-900 font-semibold text-sm pt-4 ${className}`);

	return <p className={classes}>{children}</p>;
};
