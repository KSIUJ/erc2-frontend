import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";

export default function ExtendMembership() {
	return (
		<Container size="md" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconClock size={32} stroke={1.5} />
					Przedłuż członkostwo
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Przedłużanie członkostwa
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będzie możliwość przedłużania członkostwa dla istniejących
					członków.
				</Text>
			</Card>
		</Container>
	);
}
