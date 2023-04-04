import './Nav.scss'
export default function Nav() {
    const aMenu = [
        {
            emoji: "😺",
            url: "/",
            title: "Home"
        },
        {
            emoji: "🪪",
            url: "/",
            title: "About"
        }
    ]

    const Menu = (emoji, title, url) => {
        return (
            <a href={url}>
                <div className="menu-container">
                    <p>{emoji}</p>
                    <p>{title}</p>
                </div>
            </a>
        )
    }

    return (
        <nav className="menu">
            {
                aMenu.map(menu => (
                    Menu(menu.emoji, menu.title, menu.url)
                ))
            }
        </nav>
    );
}