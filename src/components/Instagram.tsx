import { instagramPosts } from '../data/site'
import { useI18n } from '../i18n/LanguageContext'

const Heart = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 21s-7-4.6-9.5-9C.7 8.7 2.4 4.5 6.3 4.5c2 0 3.3 1 4.2 2.2.9-1.2 2.2-2.2 4.2-2.2 3.9 0 5.6 4.2 3.8 7.5C19 16.4 12 21 12 21z" />
  </svg>
)
const Comment = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3C6.5 3 2 6.7 2 11.3c0 2.4 1.2 4.5 3.2 6L4 21l4.6-2.1c1.1.3 2.2.4 3.4.4 5.5 0 10-3.7 10-8.3S17.5 3 12 3z" />
  </svg>
)

export default function Instagram() {
  const { s } = useI18n()
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-grey-brand-2 text-teal-brand">
            <svg viewBox="0 0 64 64" className="h-9 w-9" fill="currentColor" aria-hidden="true">
              <ellipse cx="30" cy="36" rx="18" ry="13" />
              <circle cx="49" cy="26" r="6" />
              <path d="M15 27l-7-5M45 46l6 7M17 45l-7 6M14 36h-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <a
              href="https://instagram.com/cruisewhitsundays/"
              target="_blank"
              rel="noreferrer"
              className="font-display text-lg font-bold uppercase tracking-widest text-slate-brand hover:text-teal-brand"
            >
              {s.instagram.handle}
            </a>
            <p className="mt-1 flex gap-5 text-sm text-slate-brand-light">
              <span>
                <strong className="text-slate-brand">{s.instagram.postsCount}</strong> {s.instagram.postsLabel}
              </span>
              <span>
                <strong className="text-slate-brand">{s.instagram.followersCount}</strong>{' '}
                {s.instagram.followersLabel}
              </span>
            </p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 md:gap-3">
          {instagramPosts.map((post) => {
            const caption = s.instagram.captions[post.id]
            return (
              <li key={post.id} className="group relative aspect-square overflow-hidden bg-grey-brand-2">
                <a href="https://instagram.com/cruisewhitsundays/" target="_blank" rel="noreferrer" aria-label={caption}>
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-brand/70 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="line-clamp-2 text-sm leading-snug">{caption}</p>
                    <p className="mt-2 flex items-center gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1">
                        <Heart /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Comment /> {post.comments}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/cruisewhitsundays/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline min-w-52"
          >
            {s.instagram.loadMore}
          </a>
        </div>
      </div>
    </section>
  )
}
