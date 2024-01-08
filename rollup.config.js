import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'es',
  },
  plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), livereload()],
};
