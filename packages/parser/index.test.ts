import { parser } from './index';
import renderer from 'react-test-renderer';

describe('parser', () => {
  test('# test', () => {
    const result = parser('# test');
    const component = renderer.create(result);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('## test', () => {
    const result = parser('## test');
    const component = renderer.create(result);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('> test', () => {
    const result = parser('> test');
    const component = renderer.create(result);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('- test', () => {
    const result = parser('- test');
    const component = renderer.create(result);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('* test', () => {
    const result = parser('* test');
    const component = renderer.create(result);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('code', () => {
    const result = parser(`
                          \`\`\`js
                            console.log('test')
                          \`\`\`
                          `);
    const component = renderer.create(result);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('[example](http://example.com)', () => {
    const result = parser('[example](http://example.com)');
    const component = renderer.create(result);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
