import "@mantine/core/styles.css";
import { useState, useEffect } from "react";
import { AppShell, AppShellMain, MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { theme } from "./theme";
import NavigationBar from "./components/NavigationBar";
import { ROUTES } from "./constants/routes";

// Import wszystkich stron
import MainPage from "./pages/MainPage";
import UserInfo from "./pages/UserInfo";
import MembersList from "./pages/MembersList";
import AddMember from "./pages/AddMember";
import ExtendMembership from "./pages/ExtendMembership";
import RolesList from "./pages/RolesList";
import AddRole from "./pages/AddRole";
import MajorsList from "./pages/MajorsList";
import AddMajor from "./pages/AddMajor";
import PeriodsList from "./pages/PeriodsList";
import AddPeriod from "./pages/AddPeriod";
import LocksList from "./pages/LocksList";
import LockLogs from "./pages/LockLogs";
import RemoteUnlock from "./pages/RemoteUnlock";

// Komponent ochrony tras dla administratorów
function AdminRoute({
	children,
	isAdmin,
}: {
	children: React.ReactNode;
	isAdmin: boolean;
}) {
	if (!isAdmin) {
		return <Navigate to="/" replace />;
	}
	return <>{children}</>;
}

export default function App() {
	// Tymczasowy stan - później będzie pobierany z API
	const [isAdmin, setIsAdmin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// Symulacja sprawdzania statusu administratora
	useEffect(() => {
		const checkAdminStatus = async () => {
			const adminStatus = localStorage.getItem("isAdmin") === "true";
			setIsAdmin(adminStatus);
			setIsLoading(false);
		};

		checkAdminStatus();
	}, []);

	// Funkcja do przełączania trybu (tymczasowa - dla demonstracji)
	const toggleAdminMode = () => {
		const newAdminStatus = !isAdmin;
		setIsAdmin(newAdminStatus);
		localStorage.setItem("isAdmin", newAdminStatus.toString());
	};

	// Pokazuj loader podczas sprawdzania statusu
	if (isLoading) {
		return (
			<MantineProvider theme={theme} defaultColorScheme="auto">
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					Ładowanie...
				</div>
			</MantineProvider>
		);
	}

	return (
		<MantineProvider theme={theme} defaultColorScheme="auto">
			<BrowserRouter>
				<AppShell navbar={{ width: 350, breakpoint: "sm" }}>
					<NavigationBar isAdmin={isAdmin} />
					<AppShellMain>
						<Routes>
							{/* Strona główna */}
							<Route
								path={ROUTES.HOME}
								element={
									<MainPage
										isAdmin={isAdmin}
										toggleAdminMode={toggleAdminMode}
									/>
								}
							/>

							{/* Strony dostępne dla wszystkich */}
							<Route path={ROUTES.USER_INFO} element={<UserInfo />} />

							{/* Strony tylko dla administratorów */}
							<Route
								path={ROUTES.MEMBERS}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<MembersList />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.ADD_MEMBER}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<AddMember />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.EXTEND_MEMBERSHIP}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<ExtendMembership />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.ROLES}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<RolesList />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.ADD_ROLE}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<AddRole />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.MAJORS}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<MajorsList />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.ADD_MAJOR}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<AddMajor />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.PERIODS}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<PeriodsList />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.ADD_PERIOD}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<AddPeriod />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.LOCKS}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<LocksList />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.LOCK_LOGS}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<LockLogs />
									</AdminRoute>
								}
							/>
							<Route
								path={ROUTES.REMOTE_UNLOCK}
								element={
									<AdminRoute isAdmin={isAdmin}>
										<RemoteUnlock />
									</AdminRoute>
								}
							/>

							{/* Przekierowanie nieznanych tras na stronę główną */}
							<Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
						</Routes>
					</AppShellMain>
				</AppShell>
			</BrowserRouter>
		</MantineProvider>
	);
}
