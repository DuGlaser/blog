import { Meta, Story } from '@storybook/react/types-6-0';

import { ArticleContent, Props } from './index';

export default {
  title: 'molecules/ArticleContent',
  component: ArticleContent,
} as Meta;

const Template: Story<Props> = ({ ...args }) => {
  return <ArticleContent {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  article: {
    title: 'git configを簡単に切り替えるツールを作った',
    public: true,
    tags: ['Go'],
    body: '## はじめに\n\nこの記事は[IPFactoryアドベントカレンダー2020](https://qiita.com/advent-calendar/2020/ipfactory)の23日目に記事です。\n\n## git configを切り替えるのってめんどくさい\n\n最近GitLabの方でコミットすることが増えたのですが、GitHubの時とは別のユーザー名やメールアドレスを使っていることもあり\n```bash\ngit config --local user.name "<gitlabのユーザー名>"\n```\nのようなコマンドを実行してgit configの設定を変える必要がありました。  \n\nでも正直めんどくさいと思ったので、簡単に切り替えられるツールがないかをネットで軽く探したのですがあまりなさそうだったので作ってしまいました。(よくわからないツールを使うなら自分好みものを作ってしまいたいという気持ちもある)\n\n\n## 技術選定\n\nとりあえず個人的にこれから作るツールに求めてるものを書いてみる。\n\n- tomlなどの設定ファイルに複数のgit configを書いてそれを切り替えられたらいいね。\n\n- CLIツールの引数を全く覚えられない人間なのでなるべく対話形式のツールがいい。\n\n- Rust🦀 かGo🐭 で作りたい(好きだから)\n\nこれらからGoにいい感じのライブラリがあったのでGoで実装することにした。',
    created_at: 1617171435732,
    updated_at: 1617349396619,
    id: '9iuI6E0ZrnaIlw6E6hyt',
  },
};
