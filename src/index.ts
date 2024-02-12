import {Command} from 'commander';
import {getPackageInfo} from './utils/get-package-infos';

process.on('SIGINT', () => process.exit(0)); // eslint-disable-line
process.on('SIGTERM', () => process.exit(0)); // eslint-disable-line

async function main() {
  const packageInfo = getPackageInfo();

  const program = new Command()
    .name('illuzion-nextauth-lib')
    .description('Install a premade auth system using NextAuth w/ Prisma.')
    .version(
      packageInfo.version || '1.0.0',
      '-v, --version',
      'display the version number'
    );

  program.parse();
}

main();
