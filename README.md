# Portfolio

Personal portfolio of Grayson Gantek, built with [Astro](https://astro.build/).

## Prerequisites

- Node.js v22 or higher
- pnpm v10.25.0 or higher

## Configuration

Environment Variables

| Name                     | Required | Description                    |
| ------------------------ | -------- | ------------------------------ |
| PUBLIC_FORMSPREE_FORM_ID | Yes      | Formspree form ID to submit to |

## Development

### Local Development

```shell
# Install dependencies
pnpm i

# Run the development server
pnpm dev

# Build the project
pnpm build

# Preview the built project
pnpm preview
```

### Check Spelling

Spelling can be checked using [cspell](https://github.com/streetsidesoftware/cspell). It's recommended to do this before pushes where lots of content was changed.

```shell
pnpm spelling
```

## Architecture Notes

### robots.txt

`src/pages/robots.txt.ts` is a static Astro endpoint that generates `robots.txt` at build time. It checks `VERCEL_ENV` to disallow all crawling on preview deployments and allow it on production.

## Dependencies

- **astro**: Front-end framework of choice.
- **sharp**: Node.js image processing, requirement of Astro ([documentation](https://docs.astro.build/en/guides/images/#default-image-service)).
- **@astrojs/mdx**: Enables MDX pages and components.
- **@astrojs/sitemap**: Generates a sitemap based on your Astro pages.
- **@formspree/react**: Contact form helper.

### Dev Dependencies

- **cspell**: Check spelling throughout the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
