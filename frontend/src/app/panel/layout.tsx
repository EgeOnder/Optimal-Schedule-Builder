function NavbarReplace() {
  return (
    <header className="m-auto flex h-14 w-4/5 items-center justify-center rounded-3xl bg-dusty-pink text-lg font-bold">
      NAVBAR PLACEHOLDER
    </header>
  );
}

export default function PanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      {/* <Navbar /> */}

      {/* TODO: Replace this with real navbar */}
      <nav className="mt-8">
        <NavbarReplace />
      </nav>

      <div className="mt-16">{children}</div>
      {/* <Footer /> */}
    </main>
  );
}
