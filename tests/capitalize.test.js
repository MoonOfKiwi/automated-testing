import {strict as assert} from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize('Hello'),'Hello');

assert.strictEqual(capitalize(''), '');

console.log('Все тесты пройдены!')