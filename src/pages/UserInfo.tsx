import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

export default function UserInfo() {
	return (
		<Container size="md" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconUser size={32} stroke={1.5} />
					Informacje o użytkowniku
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Profil użytkownika
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będą wyświetlane informacje o zalogowanym użytkowniku.
				</Text>
			</Card>
		</Container>
	);
}
