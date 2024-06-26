import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Spinner from "./ui/Spinner";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Cabins = lazy(() => import("./pages/Cabins"));
const Users = lazy(() => import("./pages/Users"));
const Settings = lazy(() => import("./pages/Settings"));
const Account = lazy(() => import("./pages/Account"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 60 * 1000,
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyles />
			<BrowserRouter>
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route
							element={
								<ProtectedRoute>
									<AppLayout />
								</ProtectedRoute>
							}
						>
							<Route index element={<Navigate replace to='dashboard' />} />
							<Route path='dashboard' element={<Dashboard />} />
							<Route path='bookings' element={<Bookings />} />
							<Route path='bookings/:bookingId' element={<Booking />} />
							<Route path='checkin/:bookingId' element={<Checkin />} />
							<Route path='cabins' element={<Cabins />} />
							<Route path='users' element={<Users />} />
							<Route path='settings' element={<Settings />} />
							<Route path='account' element={<Account />} />
						</Route>
						<Route path='login' element={<Login />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			<Toaster
				position='top-center'
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: { duration: 3000 },
					error: { duration: 5000 },
					style: {
						fontSize: "1.6rem",
						maxWidth: "500px",
						padding: "1.6rem 2.4rem",
						backgroundColor: "var(--color-grey-0)",
						color: "var(--color-grey-700)",
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
