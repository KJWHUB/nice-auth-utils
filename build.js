import esbuild from "esbuild";

/**
 * esbuild config
 * @see https://esbuild.github.io/api/#build
 */
const baseConfig = {
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  sourcemap: true,
};

Promise.all([
  // cjs
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),
  // esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
]).catch((error) => {
  console.error("Build failed", error);
  process.exit(1);
});
