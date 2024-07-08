import eslint from '@eslint/js'
import { config as tseslintConfig, configs as tseslintConfigs } from 'typescript-eslint'

export default tseslintConfig(
  {
    ignores: ['pnpm-lock.yaml', 'build', 'dist', 'docs', 'node_modules', 'public']
  },
  eslint.configs.recommended,
  ...tseslintConfigs.recommended
)
