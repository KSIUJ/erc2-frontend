import "@mantine/core/styles.css";
import { AppShell, AppShellMain, MantineProvider, Text } from "@mantine/core";
import { theme } from "./theme";

export default function App() {
	return (
		<MantineProvider theme={theme} defaultColorScheme="auto">
			<AppShell>
				<AppShellMain>
					<Text>App</Text>
				</AppShellMain>
			</AppShell>
		</MantineProvider>
	);
}
