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
// Keep the final entry as cat: 'Tie-Breaker' if you want the game to treat it as the tie-breaker.
// Scores are simulated survey scores. Recommended: keep each question total at 100.

window.RETRO_FEUD_QUESTIONS = [
 {cat:'Retro Gadgets',q:'Name a gadget people commonly used before smartphones became popular.',a:[['Nokia / Basic Cellphone',30],['MP3 Player / iPod',24],['Digital Camera',19],['Portable CD Player / Discman',15],['Pager / Beeper',12]],notes:'Accept keypad phone or feature phone for basic cellphone. Accept music player for MP3/iPod, digicam for Digital Camera, and beeper for Pager.'},
 {cat:'Early Internet',q:'Name something people used to do on the internet in the late 1990s or early 2000s.',a:[['Chat / Instant Messaging',30],['Check Email',24],['Play Online Games',19],['Download Music',15],['Visit Friendster / Social Sites',12]],notes:'Accept Yahoo Messenger, MSN or mIRC for Chat. Accept LimeWire or Kazaa for Download Music. Accept Friendster, MySpace or similar social sites.'},
 {cat:'Filipino Street Games',q:'Name a game Filipino kids commonly played outside before mobile games became popular.',a:[['Patintero',28],['Tumbang Preso',24],['Taguan / Hide-and-Seek',20],['Piko',16],['Luksong Tinik / Luksong Baka',12]],notes:'Accept tagu-taguan for Hide-and-Seek, hopscotch for Piko, and either Luksong Tinik or Luksong Baka for rank 5.'},
 {cat:'Movie Night',q:'Name something people used for movie night at home before streaming services.',a:[['VHS / VCR',28],['DVD Player',25],['Cable TV',19],['VCD Player',16],['Video Rental Store',12]],notes:'Accept videotape or video player for VHS/VCR, DVD for DVD Player, and Video City or rental shop for Video Rental Store.'},
 {cat:'School Bag Nostalgia',q:'Name something students commonly carried in their school bag in the 1990s or early 2000s.',a:[['Notebook',28],['Pencil Case / Pens',24],['Textbooks',20],['Lunch Box / Snacks',16],['Game Boy / Small Toy',12]],notes:'Accept pad paper for Notebook, pens/pencils/pencil case together, school books for Textbooks, and baon for Lunch Box/Snacks.'},
 {cat:'Keeping in Touch',q:'Name a way people kept in touch with friends before chat apps and social media.',a:[['Landline Telephone',30],['Text / SMS',25],['Handwritten Letters',18],['Pager / Beeper',15],['Payphone',12]],notes:'Accept home phone or telephone for Landline, texting for SMS, letters/notes/snail mail together, and public phone for Payphone.'},
 {cat:'Cartoons & Anime',q:'Name a cartoon or anime many kids in the Philippines watched in the 1990s or early 2000s.',a:[['Dragon Ball Z',28],['Pokémon',24],['Sailor Moon',19],['Tom and Jerry',16],['Doraemon',13]],notes:'Accept Dragon Ball for Dragon Ball Z and Pokemon without the accent. Treat this as a nostalgia question rather than strict trivia.'},
 {cat:'Toys & Fads',q:'Name a toy or craze kids wanted in the 1990s or early 2000s.',a:[['Game Boy',28],['Tamagotchi',22],['Yo-Yo',20],['Tamiya / Mini 4WD',16],['Beyblade',14]],notes:'Accept handheld Nintendo for Game Boy, virtual pet for Tamagotchi, and Mini 4WD or Tamiya together.'},
 {cat:'Computer Shop Memories',q:'Name something you would commonly see in a 1990s or early-2000s computer shop.',a:[['Desktop Computer',30],['CRT Monitor',24],['Headset / Speakers',18],['Floppy Disk / CD',16],['Printer',12]],notes:'Accept PC for Desktop Computer, box monitor for CRT, headphones for Headset, and diskette for Floppy Disk.'},
 {cat:'Photo Memories',q:'Name something people remember about taking photos before smartphone cameras.',a:[['Film Camera',30],['Photo Albums',24],['Developing / Printing Photos',20],['Disposable Camera',14],['Digital Camera',12]],notes:'Accept analog camera for Film Camera, photo developing/photo shop for Developing, and digicam for Digital Camera.'},
 {cat:'80s–90s Date Venues',q:'Name a place couples used to go on a date in the 1980s or 1990s.',a:[['Cinema / Movie Theater',30],['Disco / Dance Club',25],['Zoo',18],['Museum',15],['Library',12]],notes:'Accept movie house or theater for Cinema. Accept club, dance hall, or discotheque for Disco. These are simulated survey scores for the game.'},
 {cat:'Geek Throwback',q:'Name an old-school programming language associated with earlier generations of computing.',a:[['COBOL',30],['Pascal',24],['FORTRAN',19],['BASIC',15],['Ada',12]],notes:'This is intentionally a harder, less-common-answer question. Accept Visual Basic only if the host wants to count it under BASIC; otherwise keep BASIC as the intended answer. Simulated survey scores only.'},
 {cat:'Tie-Breaker',q:'Name something you might have seen in a typical 1990s living room.',a:[['CRT / Box-Type Television',33],['VHS / VCR',24],['Stereo / Radio',18],['Landline Telephone',15],['Video Game Console',10]],notes:'Tie-breaker: one answer per representative. Higher-ranked answer wins. Use only if total scores are equal.'}
];;
