import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export default function AddRole() {
	return (
		<Container size="md" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconPlus size={32} stroke={1.5} />
					Dodaj rolę
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Formularz dodawania roli
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będzie formularz do dodawania nowych ról w systemie.
				</Text>
			</Card>
		</Container>
	);
}
