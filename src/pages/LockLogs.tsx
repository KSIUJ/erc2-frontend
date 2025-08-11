import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";

export default function LockLogs() {
	return (
		<Container size="xl" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconFileText size={32} stroke={1.5} />
					Logi zamków
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Historia dostępu
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będą wyświetlane logi dostępu do wszystkich zamków.
				</Text>
			</Card>
		</Container>
	);
}
