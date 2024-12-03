import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Index from "./pages";
import ProfilePage from "./pages/Profile";
import EditProfilePage from "./pages/Profile/Edit";
import Atoms from "./pages/atoms";
import AttendancePage from "./pages/attendance";
import AttendanceHistory from "./pages/attendance/history";
import ForgetPasswordPage from "./pages/auth/ForgetPassword";
import LoginPage from "./pages/auth/Login";
import ResetPasswordPage from "./pages/auth/ResetPassword";
import SignupPage from "./pages/auth/Signup";
import EmployeeLeavePage from "./pages/leave";
import PrivacyPage from "./pages/privacy";
import SupportPage from "./pages/support";
import TermsPage from "./pages/terms";
import InvoiceDetails from "./pages/invoice/details";
import LeaveApplicationPage from "./pages/leave/application";
import MonthlyHistory from "./pages/report/monthly/history";
import DailyReportPage from "./pages/report/daily";
import NotificationDetails from "./pages/notification/details";
import NotificationPage from "./pages/notification";
import DailyReportHistoryPage from "./pages/report/daily/history";
import MonthlyReportApplication from "./pages/report/monthly";
import InvoicePage from "./pages/invoice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/attendance/history"
          element={
            <Layout>
              <AttendanceHistory />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />

        <Route
          path="/leave"
          element={
            <Layout>
              <EmployeeLeavePage />
            </Layout>
          }
        />
        <Route
          path="/leave/application"
          element={
            <Layout>
              <LeaveApplicationPage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <Layout>
              <EditProfilePage />
            </Layout>
          }
        />
        <Route
          path="/daily/report"
          element={
            <Layout>
              <DailyReportPage />
            </Layout>
          }
        />
        <Route
          path="/daily/report-history"
          element={
            <Layout>
              <DailyReportHistoryPage />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
        <Route
          path="/monthly/report-history"
          element={
            <Layout>
              <MonthlyHistory />
            </Layout>
          }
        />
        <Route
          path="/monthly/report"
          element={
            <Layout>
              <MonthlyReportApplication />
            </Layout>
          }
        />
        <Route
          path="/attendance"
          element={
            <Layout>
              <AttendancePage />
            </Layout>
          }
        />
        <Route
          path="/notification"
          element={
            <Layout>
              <NotificationPage />
            </Layout>
          }
        />
        <Route
          path="/invoice/details"
          element={
            <Layout>
              <InvoiceDetails />
            </Layout>
          }
        />

        <Route
          path="/invoice"
          element={
            <Layout>
              <InvoicePage />
            </Layout>
          }
        />
        <Route
          path="/notification/details"
          element={
            <Layout>
              <NotificationDetails />
            </Layout>
          }
        />
        <Route
          path="/atoms"
          element={
            <Layout>
              <Atoms />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
