// Retro Family Feud question bank: 8 regular rounds + 1 tie-breaker.
// Edit this file, save it, then refresh the host and game window.
// Each a entry is [answer, points]. Keep the tie-breaker last.
// Scores are simulated survey scores; each round totals 100 points.
window.RETRO_FEUD_QUESTIONS = [
  {
    cat: 'Retro Gadgets',
    q: 'Name a gadget people commonly used before smartphones became popular.',
    a: [
      ['Game and Watch', 30],
      ['Game Boy', 24],
      ['Walkman / Discman', 19],
      ['Family Computer / Atari', 15],
      ['Pager / Beeper', 12]
    ],
    notes: 'Accept Game & Watch for Game and Watch. Accept either Walkman or Discman, either Family Computer or Atari, and either pager or beeper for their respective answers.'
  },
  {
    cat: 'Filipino Street Games',
    q: 'Name a game Filipino kids commonly played outside before mobile games became popular.',
    a: [
      ['Patintero', 28],
      ['Tumbang Preso', 24],
      ['Taguan / Hide-and-Seek', 20],
      ['Piko', 16],
      ['Luksong Tinik / Luksong Baka', 12]
    ],
    notes: 'Accept tagu-taguan for Hide-and-Seek, hopscotch for Piko, and either Luksong Tinik or Luksong Baka for rank 5.'
  },
  {
    cat: 'Movie Night',
    q: 'Name something people used for movie night at home before streaming services.',
    a: [
      ['VHS / VCR', 28],
      ['DVD Player', 25],
      ['Cable TV', 19],
      ['VCD Player', 16],
      ['Laser Disc', 12]
    ],
    notes: 'Accept videotape or video player for VHS/VCR, DVD for DVD Player, and LaserDisc or LD for Laser Disc.'
  },
  {
    cat: 'Keeping in Touch',
    q: 'Name a way people kept in touch with friends before chat apps and social media.',
    a: [
      ['Landline Telephone', 30],
      ['Text / SMS', 25],
      ['Handwritten Letters', 18],
      ['Pager / Beeper', 15],
      ['Telegram', 12]
    ],
    notes: 'Accept home phone for Landline, texting for SMS, letters or snail mail for Handwritten Letters, and either pager or beeper. Telegram refers to the traditional message service.'
  },
  {
    cat: 'Cartoons & Anime',
    q: 'Name a cartoon or anime many kids in the Philippines watched in the 1990s or early 2000s.',
    a: [
      ['Dragon Ball Z', 28],
      ['Ghost Fighter', 24],
      ['Sailor Moon', 19],
      ['Voltes V', 16],
      ['Bio Man', 13]
    ],
    notes: 'Accept Dragon Ball for Dragon Ball Z, Yu Yu Hakusho for Ghost Fighter, and Bioman for Bio Man. Use the supplied nostalgia survey answers.'
  },
  {
    cat: 'Classic Pinoy Dating Spots',
    q: 'Name a popular place where Filipino couples would go on date back in the 1980s or 1990s.',
    a: [
      ['Park / Luneta Park', 30],
      ['Movie Theater / Sinehan', 25],
      ['Disco', 20],
      ['Fast food Chain', 15],
      ['Carnival / Perya', 10]
    ],
    notes: 'Accept park, Luneta or Rizal Park for rank 1; cinema or sinehan for rank 2; disco or discotheque for rank 3; a fast-food chain for rank 4; and carnival or perya for rank 5.'
  },
  {
    cat: 'Geek Throwback',
    q: 'Name a popular programming language used by developers in the 1980s or 1990s.',
    a: [
      ['C', 30],
      ['Fortran', 25],
      ['BASIC / Visual Basic', 20],
      ['Pascal', 15],
      ['COBOL', 10]
    ],
    notes: 'Accept ANSI C for C, either BASIC or Visual Basic for rank 3, and Turbo Pascal for Pascal. Capitalization does not matter.'
  },
  {
    cat: 'Everyday Struggles',
    q: "Name something you wouldn't want to step on while wearing socks.",
    a: [
      ['Wet Floor / Water', 35],
      ['Poop / Animal Droppings', 25],
      ['Mud', 20],
      ['Spilled Food / Sauce', 12],
      ['Chewing Gum', 8]
    ],
    notes: 'Accept puddle or wet tiles for Wet Floor, dog poop or animal waste for Poop, muddy ground for Mud, ketchup or gravy for Spilled Food, and bubble gum for Chewing Gum.'
  },
  {
    cat: 'Tie-Breaker',
    q: 'Name Pop Icon during 80s to 2000s.',
    a: [
      ['Michael Jordan', 33],
      ['Madonna', 24],
      ['Prince', 18],
      ['Britney Spears', 15],
      ['Spice Girls', 10]
    ],
    notes: 'Tie-breaker: one answer per representative. Higher-ranked answer wins. Use only if total scores are equal. Use the supplied answers and rankings.'
  }
];