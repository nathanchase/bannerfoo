// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu(
  {
    ignores: [
      '**/.nuxt/**',
      '**/.output/**',
      '**/node_modules/**',
    ],
  },
  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.vue'],
    rules: {
      // Enforce <template> at top of file, then script, then style
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],

      // Enforce new line between each attribute
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],

      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],

      // Enforce new line between each tag
      'vue/padding-line-between-tags': [
        'error',
        [{ blankLine: 'always', prev: '*', next: '*' }],
      ],

      // Enforce new line after singline elements
      'vue/singleline-html-element-content-newline': [
        'error',
        {
          ignoreWhenNoAttributes: true,
          ignoreWhenEmpty: true,
        },
      ],

      // Enforce new line between multi-line properties
      'vue/new-line-between-multi-line-property': ['error', {
        minLineOfMultilineProperty: 2,
      }],

      // Enforce defineOptions for component naming
      'vue/prefer-define-options': ['error'],

      // Enforce PascalCase for component names
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: true,
          ignores: [],
        },
      ],

      // Enforce <script setup lang="ts"> on .vue files
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],

      // Enforce <script setup> on .vue files
      'vue/component-api-style': [
        'error',
        ['script-setup'],
      ],

      // Enforce typed emits
      'vue/define-emits-declaration': ['error', 'type-based'],

      // Enforce order of define macros
      'vue/define-macros-order': ['error', {
        order: ['defineProps', 'defineEmits'],
      }],

      // Enforce typed props
      'vue/define-props-declaration': ['error', 'type-based'],

      // Make sure <button> has type attribute
      'vue/html-button-has-type': ['error', {
        button: true,
        submit: true,
        reset: true,
      }],

      // Enforce whitespace around comment content
      'vue/html-comment-content-spacing': ['error', 'always'],

      // Check for reactivity loss
      // 'vue/no-ref-object-reactivity-loss': ['error'],

      // Enforce all props with default values be optional
      'vue/no-required-prop-with-default': ['error', {
        autofix: false,
      }],

      // Enforce no template roots with v-if (use parent v-if instead)
      // 'vue/no-root-v-if': ['warn'],

      // Enforce refs to have defined types
      'vue/require-typed-ref': ['error'],
    },
  },
  {
    // Rules for all files
    rules: {
      'multiline-ternary': ['error', 'always'],
      'no-console': ['warn'],
      'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'var', next: '*' },
        { blankLine: 'always', prev: 'let', next: '*' },
        { blankLine: 'always', prev: 'const', next: '*' },
        { blankLine: 'always', prev: '*', next: 'expression' },
        { blankLine: 'always', prev: 'expression', next: '*' },
      ],
      'style/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      'style/semi': ['error', 'always'],
    },
  },
);
