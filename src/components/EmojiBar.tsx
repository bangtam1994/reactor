import React, { useState } from 'react';

import {
  ReactionBarSelector,
  ReactionCounter,
} from '@charkour/react-reactions';

interface ReactionEmojis {
  node: JSX.Element;
  label: string;
  key: string;
}

const reactionsEmojis: ReactionEmojis[] = [
  { node: <div>👍</div>, label: 'like', key: 'satisfaction' },
  { node: <div>❤️</div>, label: 'love', key: 'love' },
  { node: <div>😆</div>, label: 'haha', key: 'happy' },
  { node: <div>😮</div>, label: 'wow', key: 'surprise' },
  { node: <div>😢</div>, label: 'sad', key: 'sad' },
  { node: <div>😡</div>, label: 'angry', key: 'angry' },
];
const EmojiBar = (): JSX.Element => {
  const [myReactionEmoji, setMyReactionEmoji] = useState<any>();

  const onSelectEmoji = (key: string) => {
    const findEmoji = reactionsEmojis.find((el) => el.key === key);
    setMyReactionEmoji({
      ...myReactionEmoji,
      node: findEmoji?.node,
      label: findEmoji?.label,
      by: 'You',
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <ReactionBarSelector
        iconSize={16}
        reactions={reactionsEmojis}
        onSelect={onSelectEmoji}
      />
      <div
        style={{
          opacity: myReactionEmoji ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {myReactionEmoji && (
          <ReactionCounter reactions={[myReactionEmoji]} user={'You'} />
        )}
      </div>
    </div>
  );
};

export default EmojiBar;
