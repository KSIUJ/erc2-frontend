import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
	AppShellNavbar,
	Group,
	Text,
	Box,
	NavLink,
	Badge,
} from "@mantine/core";
import {
	IconHome,
	IconUser,
	IconUsers,
	IconList,
	IconPlus,
	IconClock,
	IconSettings,
	IconSchool,
	IconLock,
	IconFileText,
	IconLockOpen,
} from "@tabler/icons-react";

interface NavigationBarProps {
	isAdmin: boolean;
}

interface NavigationItemData {
	label: string;
	icon: React.ComponentType<{ size?: string | number; stroke?: number }>;
	path?: string;
	children?: NavigationItemData[];
}

function NavigationItem({
	item,
	level = 0,
}: {
	item: NavigationItemData;
	level?: number;
}) {
	const [opened, setOpened] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const hasChildren = item.children && item.children.length > 0;
	const isActive = item.path === location.pathname;

	const handleClick = () => {
		if (hasChildren) {
			setOpened(!opened);
		} else if (item.path) {
			navigate(item.path);
		}
	};

	if (hasChildren) {
		return (
			<NavLink
				label={
					<Group gap="xs">
						<item.icon size={16} stroke={1.5} />
						<Text>{item.label}</Text>
					</Group>
				}
				opened={opened}
				onClick={handleClick}
				childrenOffset={28}
				variant="subtle"
			>
				{item.children?.map((child, index) => (
					<NavigationItem key={index} item={child} level={level + 1} />
				))}
			</NavLink>
		);
	}

	return (
		<NavLink
			label={
				<Group gap="xs">
					<item.icon size={16} stroke={1.5} />
					<Text>{item.label}</Text>
				</Group>
			}
			onClick={handleClick}
			active={isActive}
			variant="subtle"
		/>
	);
}

export default function NavigationBar({ isAdmin }: NavigationBarProps) {
	const navigationItems: NavigationItemData[] = [
		{
			label: "Strona główna",
			icon: IconHome,
			path: "/",
		},
		{
			label: "Informacje o użytkowniku",
			icon: IconUser,
			path: "/user-info",
		},
		...(isAdmin
			? [
					{
						label: "Zarządzanie członkami",
						icon: IconUsers,
						children: [
							{
								label: "Lista członków",
								icon: IconList,
								path: "/members",
							},
							{
								label: "Dodaj członka",
								icon: IconPlus,
								path: "/add-member",
							},
							{
								label: "Przedłuż członkostwo",
								icon: IconClock,
								path: "/extend-membership",
							},
						] as NavigationItemData[],
					},
					{
						label: "Zarządzanie systemem",
						icon: IconSettings,
						children: [
							{
								label: "Lista ról",
								icon: IconList,
								path: "/roles",
							},
							{
								label: "Dodaj rolę",
								icon: IconPlus,
								path: "/add-role",
							},
							{
								label: "Kierunki studiów",
								icon: IconSchool,
								path: "/majors",
							},
							{
								label: "Dodaj kierunek",
								icon: IconPlus,
								path: "/add-major",
							},
						] as NavigationItemData[],
					},
					{
						label: "Zamki",
						icon: IconLock,
						children: [
							{
								label: "Lista zamków",
								icon: IconList,
								path: "/locks",
							},
							{
								label: "Logi zamków",
								icon: IconFileText,
								path: "/lock-logs",
							},
							{
								label: "Zdalny dostęp",
								icon: IconLockOpen,
								path: "/remote-unlock",
							},
						] as NavigationItemData[],
					},
			  ]
			: []),
	];

	return (
		<AppShellNavbar p="md">
			<Group justify="space-between" mb="lg">
				<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
					<Text fw={600} size="lg" c="blue">
						ERC 2.0 Panel
					</Text>
				</Link>
				<Badge color={isAdmin ? "red" : "blue"} variant="light" size="sm">
					{isAdmin ? "Admin" : "Użytkownik"}
				</Badge>
			</Group>

			<Box>
				{navigationItems.map((item, index) => (
					<NavigationItem key={index} item={item} />
				))}
			</Box>

			<Box mt="auto" pt="lg">
				<Text size="xs" c="dimmed" ta="center">
					wersja 1.0.0
				</Text>
			</Box>
		</AppShellNavbar>
	);
}
