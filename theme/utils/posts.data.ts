import { createContentLoader } from 'vitepress'

export interface Post {
  url: string
  title: string
  date: string
  tags: string[]
  description: string
}

export default createContentLoader('blog/posts/*.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title as string,
        date: frontmatter.date as string,
        tags: (frontmatter.tags as string[]) ?? [],
        description: (frontmatter.description as string) ?? '',
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  },
})
