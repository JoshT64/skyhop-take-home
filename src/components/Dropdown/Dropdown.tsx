"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

// select from list of file imports
const importNames = [
	{
		value: "sampleimage.jpg",
		label: "SampleImage.jpg",
	},
];

export const Dropdown = () => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<div className="border-b w-[400px] border-opacity-40 border-gray-400 pb-4">
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[650px] text-sky-900 font-semibold text-sm justify-between"
					>
						{value
							? importNames.find((importName) => importName.value === value)
									?.label
							: "Select Import Name:"}
						<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[650px] p-0">
					<Command>
						<CommandInput placeholder="Select Import..." />
						<CommandEmpty>No file found.</CommandEmpty>
						<CommandGroup>
							{importNames.map((importName) => (
								<CommandItem
									key={importName.value}
									value={importName.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === importName.value ? "opacity-100" : "opacity-0",
										)}
									/>
									{importName.label}
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
};
