import type { UserConfig } from "@commitlint/types";

/**
 * @type {UserConfig}
 * @see https://commitlint.js.org/#/reference-configuration
 * @description
 *   "@commitlint/config-conventional" 은 커밋 메시지의 형식을 검사하기 위한 기본 규칙을 제공합니다.
 *   이 규칙들은 Conventional Commits 사양을 따르며, 커밋 메시지의 일관성을 유지하는 데 도움을 줍니다.
 * @see https://www.conventionalcommits.org/en/v1.0.0/#summary
 */
export default {
  extends: ["@commitlint/config-conventional"],
} satisfies UserConfig;
