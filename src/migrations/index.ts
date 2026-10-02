import * as migration_20261002_003150 from './20261002_003150';
import * as migration_20261002_220131_site_settings from './20261002_220131_site_settings';

export const migrations = [
  {
    up: migration_20261002_003150.up,
    down: migration_20261002_003150.down,
    name: '20261002_003150',
  },
  {
    up: migration_20261002_220131_site_settings.up,
    down: migration_20261002_220131_site_settings.down,
    name: '20261002_220131_site_settings'
  },
];
