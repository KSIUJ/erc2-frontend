import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

export default function LocksList() {
	return (
		<Container size="xl" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconLock size={32} stroke={1.5} />
					Lista zamków
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Zarządzanie zamkami
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będzie lista wszystkich zamków z ich statusami i możliwością
					zarządzania.
				</Text>
			</Card>
		</Container>
	);
}
