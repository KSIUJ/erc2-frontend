import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";

export default function MajorsList() {
	return (
		<Container size="md" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconSchool size={32} stroke={1.5} />
					Kierunki studiów
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Lista kierunków studiów
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będzie lista wszystkich kierunków studiów dostępnych w systemie.
				</Text>
			</Card>
		</Container>
	);
}
