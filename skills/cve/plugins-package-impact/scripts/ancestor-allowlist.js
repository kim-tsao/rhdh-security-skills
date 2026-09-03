/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Leftover packages that bump-workspace-packages.js may ancestor-bump
 * automatically after yarn up -R.
 *
 * Allowlist a package only when all of these hold across workspaces:
 * - yarn up -R leaves a leftover held by a parent (a second resolved line,
 *   or a single unpatched pin the parent still requires)
 * - clearing it is a parent patch/minor (not a dual major)
 * - the remaining resolved version(s) are patched for the open CVE
 *   (more than one patched line is OK)
 * - bump-package-ancestors.js revert-on-failure is enough safety
 *
 * A single patched resolved line after yarn up -R is done — do not walk
 * parents. A single unpatched pin is a leftover; more than one resolved
 * line is a leftover only when at least one version is still in range.
 * Ancestor success is CVE leftover gone, not a single remaining line.
 *
 * qs: leftover `qs@npm:~6.14.0` (6.14.2) via express / body-parser;
 * bumping express to a release that depends on qs ~6.15.1 drops 6.14.2.
 * Remaining patched lines (6.15.3 and 6.16.0) are complete.
 * webpack-dev-server: leftover `webpack-dev-server@npm:5.2.2` (5.2.2) via @rspack/dev-server.
 * js-cookie: leftover single pin 2.2.1 via react-use; parent bump moves it to 3.0.8.
 *
 * Do not add uuid, react-router, @nestjs/*, adm-zip, tmp, lodash, tar,
 * undici, or fast-xml-parser — dual-major or pinned leftovers.
 * Everything else still requires an explicit ancestor-bump ask.
 */
export const ANCESTOR_AUTO_PACKAGES = ['qs', 'webpack-dev-server', 'js-cookie'];

export function isAncestorAutoPackage(packageName) {
  return ANCESTOR_AUTO_PACKAGES.includes(String(packageName || ''));
}
