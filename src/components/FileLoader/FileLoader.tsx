// FileLoader.tsx
import { useState, useEffect } from "react";
import { Progress } from "../ui/progress";
import { Text } from "..";

interface FileLoaderProps {
	file: { name: string; size: number };
}

export const FileLoader = ({ file }: FileLoaderProps) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (progress < 100) {
				setProgress((prevProgress) => prevProgress + 1);
			}
		}, file.size / 1500);
		return () => {
			clearInterval(interval);
		};
	}, [file.size, progress]);

	const formatBytes = (bytes: number, decimals = 2) => {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ["Bytes", "KB", "MB", "GB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
	};

	useEffect(() => {
		setProgress(0); // Reset progress when uploading new file
	}, [file.name]);

	return (
		<div className="flex  pl-4 pt-2 items-center">
			<img
				className="relative top-2"
				src="/file-load-icon.png"
				alt="file icon"
			/>
			<span className="pl-4">
				<Text className="flex pt-0 justify-between font-light items-baseline text-gray-400">
					{file.name.length < 70
						? file.name
						: `${file.name.substring(0, 70)}...`}
					{""}
					<Text className="font-mono font-light text-xs tracking-tighter text-black">
						{formatBytes(file.size)}
					</Text>{" "}
				</Text>
				<Progress className="w-[585px]" value={progress} />
			</span>
		</div>
	);
};
