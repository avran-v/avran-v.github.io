import React, { useState } from "react";
import { Flower, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    href: "https://github.com/avran-v",
    label: "github",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/keerthi-neni/",
    label: "linkedin",
    icon: Linkedin,
  },
  {
    href: "mailto:aveerama3@gatech.edu",
    label: "email",
    icon: Mail,
  },
];

export default function FooterBand({ onToggleTheme }) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleThemeToggle = () => {
    setIsSpinning(false);
    window.requestAnimationFrame(() => {
      setIsSpinning(true);
    });
    onToggleTheme();
  };

  return (
    <footer className="absolute inset-x-0 bottom-0 z-20 bg-footer-band">
      <div className="flex min-h-24 items-center">
        <div className="w-3/5 px-8 py-4">
          <p className="text-sm font-medium text-footer-muted">
            currently on the lookout for beautiful things
          </p>
        </div>
        <div className="w-2/5 px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {footerLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-footer transition-colors hover:opacity-80"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-footer-muted">click me!</span>
              <button
                type="button"
                onClick={handleThemeToggle}
                onAnimationEnd={() => setIsSpinning(false)}
                className={`inline-flex items-center justify-center text-footer-accent transition-transform hover:scale-110 ${
                  isSpinning ? "theme-flower-spin" : ""
                }`}
                aria-label="Invert color scheme"
              >
                <Flower size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
