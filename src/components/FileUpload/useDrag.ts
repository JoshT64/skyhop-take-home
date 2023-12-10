export const useDrag = ({
	onFileNameChange,
}: {
	onFileNameChange: (file: File) => void;
}) => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event?.target?.files?.[0];
		if (file) {
			onFileNameChange(file);
		}
	};

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy";
		event.currentTarget.style.backgroundColor = "lightgray";
	};

	const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
		event.currentTarget.style.backgroundColor = "";
	};
	return {
		handleFileChange,
		handleDragOver,
		handleDragLeave,
	};
};
