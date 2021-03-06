import Link from "next/link"

let Nav = ({ mobile, closeMenu }) => {
  return (
    <nav id="nav" className={mobile && "mobile"}>
      <ul id="list" className={mobile && "mobile"}>
        <li onClick={mobile && closeMenu}>
          <Link href="/">
            <a>about</a>
          </Link>
        </li>
        <li onClick={mobile && closeMenu}>
          <Link href="/projects">
            <a>projects</a>
          </Link>
        </li>
        <li onClick={mobile && closeMenu}>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        #list {
          list-style: none;
          columns: 3;
          margin: 2rem 0;
          font-family: monospace;

          & li:nth-of-type(2) {
            padding-right: 1rem;
          }

          & li:nth-of-type(3) {
            padding-left: 1rem;
          }

          & a:hover {
            text-decoration: underline;
          }
        }

        #nav.mobile {
          height: 100%;
          & #list {
            height: 50%;
            transform: translateY(50%);
            font-size: larger;
          }
        }

        #list.mobile {
          columns: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;

          & li {
            margin: 0;
          }
        }
      `}</style>
    </nav>
  )
}

export default Nav
