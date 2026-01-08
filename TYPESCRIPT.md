# TypeScript Integration

This project now includes TypeScript support for better code quality and type safety.

## Structure

- **`src/`** - TypeScript source files (.ts)
- **`js/`** - Compiled JavaScript output (generated, do not edit directly)

## Development

### Install Dependencies
```bash
npm install
```

### Build TypeScript
```bash
npm run build:ts
```

### Watch Mode (Auto-compile on changes)
```bash
npm run watch:ts
```

### Type Check Only (No compilation)
```bash
npm run type-check
```

## Making Changes

1. Edit TypeScript files in `src/` directory
2. Run `npm run build:ts` to compile
3. Compiled JavaScript will be generated in `js/` directory
4. The HTML files reference `js/main.js` which is automatically updated

## Benefits

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: IntelliSense, auto-completion, and refactoring
- **Modern JavaScript**: ES2020 features with backward compatibility
- **Maintainability**: Clear interfaces and type definitions

## Configuration

- **`tsconfig.json`** - TypeScript compiler configuration
- **`package.json`** - npm scripts and dependencies

## Note

The original JavaScript file has been backed up to `js/main.js.backup` for reference.
