import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";

export default function PeriodsList() {
	return (
		<Container size="xl" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconCalendar size={32} stroke={1.5} />
					Lista okresów
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Zarządzanie okresami
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będzie lista wszystkich okresów w systemie z możliwością
					zarządzania nimi.
				</Text>
			</Card>
		</Container>
	);
}
