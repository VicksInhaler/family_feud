
// Retro Family Feud question bank
// Edit this file with Notepad, save it, then refresh index.html.
//
// Format for each question:
// {
//   cat: 'Category',
//   q: 'Question text',
//   a: [['Answer 1', 30], ['Answer 2', 25], ['Answer 3', 20], ['Answer 4', 15], ['Answer 5', 10]],
//   notes: 'Host notes / accepted alternatives'
// }
//
// Keep the final entry as cat: 'Tie-Breaker' if you want the game
// to treat it as the tie-breaker.
//
// Scores are simulated survey scores.
// Recommended: keep each question total at 100.

window.RETRO_FEUD_QUESTIONS = [

  {
    cat: 'Retro Gadgets',
    q: 'Name a gadget people commonly used before smartphones became popular.',
    a: [
      ['Nokia / Basic Cellphone', 30],
      ['MP3 Player / iPod', 24],
      ['Digital Camera', 19],
      ['Portable CD Player / Discman', 15],
      ['Pager / Beeper', 12]
    ],
    notes: 'Accept keypad phone or feature phone for basic cellphone. Accept music player for MP3/iPod, digicam for Digital Camera, and beeper for Pager.'
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
      ['Video Rental Store', 12]
    ],
    notes: 'Accept videotape or video player for VHS/VCR, DVD for DVD Player, and Video City or rental shop for Video Rental Store.'
  },

  {
    cat: 'Keeping in Touch',
    q: 'Name a way people kept in touch with friends before chat apps and social media.',
    a: [
      ['Landline Telephone', 30],
      ['Text / SMS', 25],
      ['Handwritten Letters', 18],
      ['Pager / Beeper', 15],
      ['Payphone', 12]
    ],
    notes: 'Accept home phone or telephone for Landline, texting for SMS, letters/notes/snail mail together, and public phone for Payphone.'
  },

  {
    cat: 'Cartoons & Anime',
    q: 'Name a cartoon or anime many kids in the Philippines watched in the 1990s or early 2000s.',
    a: [
      ['Dragon Ball Z', 28],
      ['Pokémon', 24],
      ['Sailor Moon', 19],
      ['Tom and Jerry', 16],
      ['Doraemon', 13]
    ],
    notes: 'Accept Dragon Ball for Dragon Ball Z and Pokemon without the accent. Treat this as a nostalgia question rather than strict trivia.'
  },

  {
    cat: 'Classic Pinoy Dating Spots',
    q: 'Name a popular place where Filipino couples would go on dates back in the 1980s or 1990s.',
    a: [
      ['Luneta Park / Rizal Park', 30],
      ['Movie Theater / Sinehan', 25],
      ['Disco / Dance Club', 20],
      ['Manila Bay / Roxas Boulevard', 15],
      ['Carnival / Fiesta', 10]
    ],
    notes: 'Accept Rizal Park for Luneta, cinema for Movie Theater, discotheque or nightclub for Disco, Roxas Boulevard or Manila Bay sunset viewing for Manila Bay, and perya or amusement fair for Carnival. Simulated survey scores only.'
  },

  {
    cat: 'Geek Throwback',
    q: 'Name an old-school programming language associated with earlier generations of computing.',
    a: [
      ['COBOL', 30],
      ['Pascal', 24],
      ['FORTRAN', 19],
      ['BASIC', 15],
      ['Ada', 12]
    ],
    notes: 'This is intentionally a harder, less-common-answer question. Accept Visual Basic only if the host wants to count it under BASIC; otherwise keep BASIC as the intended answer. Simulated survey scores only.'
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
    notes: 'Accept puddle or wet tiles for Wet Floor, dog poop or animal waste for Poop, muddy ground for Mud, ketchup or gravy for Spilled Food, and bubble gum for Chewing Gum. Simulated survey scores only.'
  },

{
  cat: 'Geek Throwback',
  q: 'Name a popular programming language used in the 1980s or 1990s.',
  a: [
    ['COBOL', 30],
    ['Pascal', 24],
    ['FORTRAN', 19],
    ['BASIC', 15],
    ['C', 12]
  ],
  notes: 'Accept Turbo Pascal for Pascal, Visual Basic or QBASIC for BASIC, and ANSI C for C. Simulated survey scores only.'
},


  {
    cat: 'Tie-Breaker',
    q: 'Name something you might have seen in a typical 1990s living room.',
    a: [
      ['CRT / Box-Type Television', 33],
      ['VHS / VCR', 24],
      ['Stereo / Radio', 18],
      ['Landline Telephone', 15],
      ['Video Game Console', 10]
    ],
    notes: 'Tie-breaker: one answer per representative. Higher-ranked answer wins. Use only if total scores are equal.'
  }

];
