import React from "react"; 
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
      <header className="sticky top-0 z-50 bg-site h-16">
        <div className="h-full flex items-center justify-end pr-12">
          <nav className="flex gap-12 text-site-muted">
            <div className="relative group">
              <Link
                to="/"
                className="theme-smooth text-2xl font-bold transition-colors hover:opacity-90"
                style={{ color: isActive("/") ? "var(--site-text)" : "var(--site-muted)" }}
              >
                about
              </Link>
              {isActive("/") && (
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded text-xs font-semibold text-site-subtle opacity-0 transition-opacity group-hover:opacity-100">
                  you're here :)
                </span>
              )}
            </div>
            <div className="relative group">
              <Link
                to="/projects"
                className="theme-smooth text-2xl font-bold transition-colors hover:opacity-90"
                style={{ color: isActive("/projects") ? "var(--site-text)" : "var(--site-muted)" }}
              >
                projects
              </Link>
              {isActive("/projects") && (
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded text-xs font-semibold text-site-subtle opacity-0 transition-opacity group-hover:opacity-100">
                  you're here :)
                </span>
              )}
            </div>
            <div className="relative group">
              <span
                className="theme-smooth text-2xl font-bold cursor-default select-none"
                style={{ color: "color-mix(in srgb, var(--site-muted) 70%, transparent)" }}
                aria-disabled="true"
              >
                writing
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded text-xs font-semibold text-site-subtle opacity-0 transition-opacity group-hover:opacity-100">
                coming soon!
              </span>
            </div>
          </nav>
        </div>
      </header>
    );
  }
