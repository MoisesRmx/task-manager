import './Header.css'
export default function Header({ title }) {
  return (
    <header className="header">
      <h1>
      { title }
      </h1>
      <a href="https://github.com/moisesRmx" target="_blank"><img src="/github-icon.png" alt="github icon" /></a>
    </header>
  )
}
