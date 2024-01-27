function Header() {
  return <header>Este es el layout erdwin</header>;
}

export default function erdwin({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
