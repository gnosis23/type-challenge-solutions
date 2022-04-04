# Literal Inference

对于字符串数组，ts默认推导出的类型是 string[]
```ts
const playlist = [
    "The Legend of Sleepy Hollow by The Monotones.mp3",
    "(It's a) Monster's Holiday by Buck Owens.mp3",
    "Bo Meets the Monster by Bo Diddley.mp3",
    "Purple People Eater Meets the Witch Doctor by The Big Bopper.mp3",
    "Screamin Ball (at Dracula Hall) by The DuPonts.mp3",
    "Batman, Wolfman, Frankenstein, or Dracula by The Diamonds.mp3",
    "Frankenstein Twist by The Crystals.mp3",
    "'Thriller' by Michael Jackson.mp3"
];

// string[]
typeof playlist
```

如果给数组后面加个 `as const` ，那么就告诉 ts 把它类型当成常量
```ts
const playlist = [
    "The Legend of Sleepy Hollow by The Monotones.mp3",
    "(It's a) Monster's Holiday by Buck Owens.mp3",
    "Bo Meets the Monster by Bo Diddley.mp3",
    "Purple People Eater Meets the Witch Doctor by The Big Bopper.mp3",
    "Screamin Ball (at Dracula Hall) by The DuPonts.mp3",
    "Batman, Wolfman, Frankenstein, or Dracula by The Diamonds.mp3",
    "Frankenstein Twist by The Crystals.mp3",
    "'Thriller' by Michael Jackson.mp3"
] as const;

// ["The Legend of Sleepy Hollow by the Monotones.mp3", ...]
typeof playlist
```
