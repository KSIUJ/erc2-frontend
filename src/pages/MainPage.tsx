import {
	Container,
	Title,
	Text,
	Card,
	Button,
	Badge,
	Group,
} from "@mantine/core";
import { IconHome, IconUserCheck, IconUser } from "@tabler/icons-react";

interface MainPageProps {
	isAdmin: boolean;
	toggleAdminMode: () => void;
}

export default function MainPage({ isAdmin, toggleAdminMode }: MainPageProps) {
	return (
		<Container size="md" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconHome size={32} stroke={1.5} />
					ERC 2.0 - Strona główna
				</Group>
			</Title>

			{/* Status użytkownika */}
			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Group justify="space-between" mb="md">
					<Text fw={500}>Status użytkownika</Text>
					<Badge color={isAdmin ? "red" : "blue"} variant="light" size="lg">
						<Group gap="xs" align="center">
							{isAdmin ? <IconUserCheck size={16} /> : <IconUser size={16} />}
							{isAdmin ? "Administrator" : "Użytkownik"}
						</Group>
					</Badge>
				</Group>

				<Text size="sm" c="dimmed" mb="md">
					{isAdmin
						? "Masz dostęp do wszystkich funkcji administracyjnych. Możesz zarządzać członkami, rolami i zamkami."
						: "Jesteś zwykłym użytkownikiem. Masz dostęp do podstawowych funkcji systemu."}
				</Text>

				<Button
					onClick={toggleAdminMode}
					variant="outline"
					size="sm"
					color={isAdmin ? "blue" : "red"}
				>
					{isAdmin
						? "Przełącz na tryb użytkownika"
						: "Przełącz na tryb administratora"}
				</Button>
			</Card>
		</Container>
	);
}
