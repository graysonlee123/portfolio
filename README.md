# Portfolio

Personal portfolio of Grayson Gantek, built with [Astro](https://astro.build/).

## Prerequisites

- Node.js v22 or higher
- pnpm v10.25.0 or higher

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

## Dependencies

- **astro**: Front-end framework of choice.
- **sharp**: Node.js image processing, requirement of Astro ([documentation](https://docs.astro.build/en/guides/images/#default-image-service)).

### Dev Dependencies

- **cspell**: Check spelling throughout the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
