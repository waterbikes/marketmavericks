'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './dashboard.css' // optional custom CSS

export default function DashboardLayout({ children }) {
  const pathname = usePathname()

  const isActive = (path) => pathname === path ? 'active-link' : ''

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h2 className="logo">MarketMavericks</h2>
        <nav>
          <ul>
            <li><Link href="/dashboard" className={isActive('/dashboard')}>🏠 Dashboard</Link></li>
            <li><Link href="/dashboard/bookings" className={isActive('/dashboard/bookings')}>📋 My Bookings</Link></li>
            <li><Link href="/dashboard/profile" className={isActive('/dashboard/profile')}>👤 Profile</Link></li>
            <li><button onClick={() => {
              document.cookie = 'token=; Max-Age=0'
              window.location.href = '/login'
            }}>🚪 Logout</button></li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">{children}</main>
    </div>
  )
}
