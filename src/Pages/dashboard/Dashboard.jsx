import LeftSidebar from "./leftSidebar"
export default function Dashboard() {
  return (
    <div className="bg-[var(--n-l-100)] dark:bg-[var(--n-d-900)] flex w-full min-h-screen">
        <LeftSidebar />
    </div>
  )
}
