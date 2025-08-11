import { Container, Title, Text, Card, Group } from "@mantine/core";
import { IconList } from "@tabler/icons-react";

export default function RolesList() {
	return (
		<Container size="xl" py="xl">
			<Title order={1} mb="lg">
				<Group gap="xs" align="center">
					<IconList size={32} stroke={1.5} />
					Lista ról
				</Group>
			</Title>

			<Card shadow="sm" padding="lg" radius="md" withBorder mb="lg">
				<Text fw={500} mb="md">
					Zarządzanie rolami
				</Text>
				<Text size="sm" c="dimmed">
					Tutaj będzie lista wszystkich ról w systemie z możliwością zarządzania
					nimi.
				</Text>
			</Card>
		</Container>
	);
}
