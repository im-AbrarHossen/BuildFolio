import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/public-pages/Home";
import Apartment from "../pages/public-pages/Apartment";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import Dashboard from "../pages/private-pages/Dashboard";
import PrivateRouter from "../routers/PrivateRouter"
import MyProfile from "../components/MyProfile"
import Announcements from "../components/Announcements"
import AgreementRequest from "../components/AgreementRequest";
import MakeAnnouncement from "../components/MakeAnnouncement";
import ManageMembers from "../components/ManageMembers";
import ManageCoupons from "../components/ManageCoupons";
import MakePayment from "../PaymentComponents/MakePayment";
import PaymentHistory from "../PaymentComponents/PaymentHistory";
import ErrorPage from "../pages/public-pages/ErrorPage";
import AdminRouter from "./AdminRouter";
import MemberRouter from "./MemberRouter";
import Payment from "../PaymentComponents/Payment";
import WelcomeDashboard from "../components/WelcomeDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/apartment",
        element: <Apartment></Apartment>,
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRouter>
                <Dashboard></Dashboard>
            </PrivateRouter>
        ),
        children: [
            {
                index: true,
                element: <WelcomeDashboard />,
            },
            {
                path: "my-profile",
                element: <MyProfile />,
            },
            {
                path: "manage-members",
                element: (
                    <AdminRouter>
                        <ManageMembers />
                    </AdminRouter>
                ),
            },
            {
                path: "agreement-request",
                element: (
                    <AdminRouter>
                        <AgreementRequest />
                    </AdminRouter>
                ),
            },
            {
                path: "manage-coupons",
                element: (
                    <AdminRouter>
                        <ManageCoupons />
                    </AdminRouter>
                ),
            },
            {
                path: "make-payment",
                element: (
                    <MemberRouter>
                        <MakePayment />
                    </MemberRouter>
                ),
            },
            {
                path: "make-announcements",
                element: (
                    <AdminRouter>
                        <MakeAnnouncement />
                    </AdminRouter>
                ),
            },
            {
                path: "announcements",
                element: <Announcements />,
            },
            {
                path: "payment-history",
                element: (
                    <MemberRouter>
                        <PaymentHistory />
                    </MemberRouter>
                ),
            },

        ],
    },
    {
        path: "/auth/login",
        element: <Login></Login>,
    },
    {
        path: "/auth/register",
        element: <Register></Register>,
    },
    {
        path: "/payment",
        element: <Payment></Payment>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;