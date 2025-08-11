import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

export default function MembersList() {
	return (
		<Container size="xl" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconUsers size={32} stroke={1.5} />
					Lista członków
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Lista członków koła
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będzie wyświetlana lista wszystkich członków z możliwością
					wyszukiwania i filtrowania.
				</Text>
			</Card>
		</Container>
	);
}
