import React from "react";
import { Route, RouteProps } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

// dashboard
const EcommerceDashboard = React.lazy(
	() => import("../pages/dashboard/Ecommerce")
);
const AnalyticsDashboard = React.lazy(
	() => import("../pages/dashboard/Analytics")
);

// setting
const SettingList = React.lazy(() => import("../pages/setting/index"));

// receipt
const ReceiptList = React.lazy(() => import("../pages/receipt/index"));

// delivery bill
const DeliveryBillList = React.lazy(
	() => import("../pages/deliveryBill/index")
);

// inventory
const InventoryList = React.lazy(() => import("../pages/inventory/index"));

// employee
const EmployeeList = React.lazy(() => import("../pages/employee/index"));

// report
const Report = React.lazy(() => import("../pages/report/index"));

// statistics
const Statistics = React.lazy(() => import("../pages/statistics/index"));

export interface RoutesProps {
	path: RouteProps["path"];
	name?: string;
	component?: RouteProps["component"];
	route?: any;
	exact?: RouteProps["exact"];
	icon?: string;
	header?: string;
	roles?: string[];
	children?: RoutesProps[];
}

// root routes
const rootRoute: RoutesProps = {
	path: "/",
	exact: true,
	component: () => <Root />,
	route: Route,
};

// dashboards
const dashboardRoutes: RoutesProps = {
	path: "/dashboard",
	name: "Dashboards",
	icon: "airplay",
	header: "Navigation",
	children: [
		{
			path: "/dashboard/ecommerce",
			name: "Ecommerce",
			component: EcommerceDashboard,
			route: PrivateRoute,
		},
		{
			path: "/dashboard/analytics",
			name: "Analytics",
			component: AnalyticsDashboard,
			route: PrivateRoute,
		},
	],
};

// app
const projectAppRoutes: RoutesProps[] = [
	{
		path: "/receipt",
		name: "Receipt",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",
		children: [
			{
				path: "/receipt",
				name: "Receipt List",
				component: ReceiptList,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/delivery-bill",
		name: "Delivery Bill",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",
		children: [
			{
				path: "/delivery-bill",
				name: "Delivery Bill List",
				component: DeliveryBillList,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/inventory",
		name: "Inventory",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",
		children: [
			{
				path: "/inventory",
				name: "Inventory List",
				component: InventoryList,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/employees",
		name: "Employee",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",
		children: [
			{
				path: "/employees",
				name: "Employee List",
				component: EmployeeList,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/report",
		name: "Report",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",
		children: [
			{
				path: "/report",
				name: "Report List",
				component: Report,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/statistics",
		name: "Statistics",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",
		children: [
			{
				path: "/statistics",
				name: "Statistics List",
				component: Statistics,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/setting",
		name: "Setting",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",
		children: [
			{
				path: "/setting/role",
				name: "Setting Role",
				component: SettingList,
				route: PrivateRoute,
			},
			{
				path: "/setting/product",
				name: "Setting Product",
				component: SettingList,
				route: PrivateRoute,
			},
			{
				path: "/setting/supplier",
				name: "Setting Supplier",
				component: SettingList,
				route: PrivateRoute,
			},
		],
	},
];

// auth
const authRoutes: RoutesProps[] = [
	{
		path: "/auth/login",
		exact: true,
		name: "Login",
		component: Login,
		route: Route,
	},
	{
		path: "/auth/confirm",
		name: "Confirm",
		component: Confirm,
		route: Route,
	},
	{
		path: "/auth/forget-password",
		name: "Forget Password",
		component: ForgetPassword,
		route: Route,
	},
	{
		path: "/auth/lock-screen",
		name: "Lock Screen",
		component: LockScreen,
		route: Route,
	},
	{
		path: "/auth/logout",
		name: "Logout",
		component: Logout,
		route: Route,
	},
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
	let flatRoutes: RoutesProps[] = [];

	routes = routes || [];
	routes.forEach((item: RoutesProps) => {
		flatRoutes.push(item);

		if (typeof item.children !== "undefined") {
			flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
		}
	});
	return flatRoutes;
};

// All routes
const authProtectedRoutes = [rootRoute, dashboardRoutes, ...projectAppRoutes];
const publicRoutes = [...authRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
	publicRoutes,
	authProtectedRoutes,
	authProtectedFlattenRoutes,
	publicProtectedFlattenRoutes,
};