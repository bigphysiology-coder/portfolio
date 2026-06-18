export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-text-secondary/60 text-xs">
          &copy; {new Date().getFullYear()} Abdulrasheed Abdulrazak
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/bigphysiology-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary/60 hover:text-accent transition-colors duration-300 text-xs"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abdulrasheeda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary/60 hover:text-accent transition-colors duration-300 text-xs"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
