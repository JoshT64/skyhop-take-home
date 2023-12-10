import {
	ClientSelect,
	Container,
	Dropdown,
	FileUpload,
	Hero,
	RadioSelect,
	Separator,
	StatusText,
	Text,
} from "./components";
import { Label } from "./components/ui/label";
import { Switch } from "./components/ui/switch";
import "./styles/App.css";

function App() {
	return (
		<>
			{/* <CloseButton /> */}
			<Hero />
			<Container>
				<div id="leftRow" className="text-start">
					<Dropdown />
					<Text className="pb-2">
						Select a manifest that you'd like to import
					</Text>
					<FileUpload />
					<Separator className="w-[400px]" />
					<Separator className="w-[400px]">
						<StatusText text={"Elapse Data Checking:"} isAvailable />
					</Separator>
					<Text>Tolerance Window</Text>
					<div className="flex items-center pt-2">
						<Switch className="mr-1"></Switch>
						<Label className="flex items-center">
							<p className="pr-2">Toggle ON </p>
							<p>|</p>
							<span className="flex items-center pl-2">
								<img className="pr-1" src="/tolerance-window.png" />
								Select Tolerance Level
							</span>{" "}
						</Label>
					</div>
				</div>
				<div id="rightRow" className="pr-8 text-start place-self-auto">
					<Separator>
						<Text className="pt-0">
							Split schedule using social distancing?
						</Text>
						<RadioSelect options={["Yes", "No"]} defaultValue="yes" />
					</Separator>
					<Separator>
						<StatusText text={"Location Checking:"} isAvailable />
					</Separator>
					<ClientSelect />
				</div>
			</Container>
		</>
	);
}

export default App;
