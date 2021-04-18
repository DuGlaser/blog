import renderer from 'react-test-renderer';

import { parser } from './index';

describe('parser', () => {
  test('# test', () => {
    const { element } = parser('# test');
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('## test', () => {
    const { element } = parser('## test');
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('> test', () => {
    const { element } = parser('> test');
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('- test', () => {
    const { element } = parser('- test');
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('* test', () => {
    const { element } = parser('* test');
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('code', () => {
    const { element } = parser(`
                          \`\`\`js
                            console.log('test')
                          \`\`\`
                          `);
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('break line', () => {
    const { element } = parser(`hoge
                           hoge`);
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('[example](http://example.com)', () => {
    const { element } = parser('[example](http://example.com)');
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('![example](example.png)', () => {
    const { element } = parser('![example](example.png){height=100}');
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('![example](example.png=100x100)', () => {
    const { element } = parser('![example](example.png=100x100)');
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
