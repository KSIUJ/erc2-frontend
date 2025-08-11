import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconLockOpen } from "@tabler/icons-react";

export default function RemoteUnlock() {
	return (
		<Container size="md" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconLockOpen size={32} stroke={1.5} />
					Zdalny dostęp
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Panel zdalnego odblokowania
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będzie możliwość zdalnego odblokowania zamków w przypadku awarii
					lub nagłych sytuacji.
				</Text>
			</Card>
		</Container>
	);
}
