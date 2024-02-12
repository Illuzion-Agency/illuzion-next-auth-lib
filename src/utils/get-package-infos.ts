import {readJSONSync} from 'fs-extra';
import {type PackageJson} from 'type-fest'; //eslint-disable-line
const path = require('path');

export function getPackageInfo() {
  const packageJsonPath = path.join('package.json');

  return readJSONSync(packageJsonPath) as PackageJson;
}
