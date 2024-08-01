import Sidebar from "../shared/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
}
