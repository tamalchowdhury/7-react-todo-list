import { AUTHOR_NAME, AUTHOR_URL, SITE_TITLE } from "../lib/constants"

export default function Footer() {
  return (
    <footer className='footer'>
      <div>
        {SITE_TITLE} by{" "}
        <a href={AUTHOR_URL} target='_blank'>
          {AUTHOR_NAME}
        </a>
      </div>
    </footer>
  )
}
