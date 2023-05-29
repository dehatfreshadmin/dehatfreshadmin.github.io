'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "097cf191a376517f0403b415ce7d1e03",
".git/config": "b744cf3ae50f1fcc514f012720cd220a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "359c5caedd93861d65d8ea2df9f7a291",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f87008455a705922115a8d0852c6a4e",
".git/logs/refs/heads/master": "7f87008455a705922115a8d0852c6a4e",
".git/logs/refs/remotes/origin/master": "ca7a9d01a4bfbe32a180705c70ca1f59",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/0d/2b52ec2e29db64fbea825c460f3390c7129bf5": "5309ba3caf93aa8e18ab512fb7368d3d",
".git/objects/0e/e7ef25aa7c4dd1176135b83c61dfa238629297": "b964d479e173757558f078889eeac025",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/337c4ecdb897223e6014c8de68171b9d03345d": "b5fe30e95dff74226879ff0437816a35",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/ca97c74621c851902722664c7200d1d8f7b71a": "ac543da60550fc29d3afaa805f7b1107",
".git/objects/16/f99c25331b23b150d69d918d26a29863f1d4f3": "7c68b99616489e27162695b4eb3e9023",
".git/objects/18/f4b2746893e86599487308c7f51167f0e2c868": "54084992e2b5de3660c2f4799c6b3345",
".git/objects/1c/aff4f043e1a6f5735d85fb4e25e21c66248eca": "b42b17d9921661404ef6bcb3a4d575f7",
".git/objects/24/ea469e6d6fc487df07e6dae4edc21229658f85": "725219c6f29b40e94f9f89e56c10f2b5",
".git/objects/27/553e89b0f5b9e8e9d28ffc7063d089e15e97e5": "bd4d39be26a063a01f84926d9e55580a",
".git/objects/2d/a9e6ccbad2831b5b663ccbd5d0c7308c8c4c52": "1e9ec34dd93487e4b7352ed694d52c4d",
".git/objects/2e/32a6d9620a1443d4878ba34bc12dd05df59126": "10c0ab0e4451a5651a33c060184fdf95",
".git/objects/2e/409312c1a43dc095d505cef865fbe947f27ec3": "558d7167a060b81d1aca4aba06de0966",
".git/objects/2f/b4121b020e86f0d2304a39b1f420691d9913c7": "d37ff4b51f08c5e468240bfd821a08c3",
".git/objects/32/90d1629e040fc5cc8be5e5dccc8c88e84d8e34": "36d5838727a2cee6ebfaa594444e8bf1",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3d/935ddf7b9f2b54de9039390c9214df7c0a9834": "0c8806b5e042b1eaebe52cc4ed9a27fc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/5f2baa1c10badea1d130f769cbe74fec588fec": "c7f67d2c8e0dc7cd74b4547cef3a007f",
".git/objects/46/88eb3a6907331a3fab332a5d3c106dcf29d921": "57f134545814d7d6818776d8b606bfbb",
".git/objects/48/d94249cd3431fb88157cacf225a804cd50a8a7": "1cf56d9b5ed65de0bb46582e35aaa8c9",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/b1617c7a3ad177d166f1796224e698b75d5d8a": "cbb4272b27a5737ab8895c33a41bb5cd",
".git/objects/50/6f2de6de565f8d74f84755a94a636e330648dc": "575e4cf7637a21628d3259f9fafdc325",
".git/objects/50/9cacd56a259ec144a8391786a4a463f8c4acf3": "cb20c881e311fab89e396d06036f9907",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/5b/d595056d34c2c412006a86e0f28f0050847784": "ebbf47c33314088aca0c76a3156bc25f",
".git/objects/5c/e32da2543add14ecdd3442b4df134fec3ef866": "e3d8874fd516e3f42b08740890f1ca2f",
".git/objects/5d/3e200a1808f5cb5f2bd48ad18faac8d34da6ad": "b449159980113431a742549a0ab1c85e",
".git/objects/5d/f83aaea0e981f777a08c4f6d62915830520be7": "56ce3e3444c30f17fd7f0df8538c8d4a",
".git/objects/62/14bb54cc770ad4e8c6ac6cb9fb9778588165a1": "68d81d8bb3ee5f1e8187fa08d127d3f8",
".git/objects/65/102d6023914d737dbc1f540e9af8da2f68ad14": "bb6b2f2028d21919ec89ccd3f7ac5f73",
".git/objects/67/9404ea8c8bb8a90e16f3942e16e979b3aeedb5": "ca888d3fb95bbc3963e4093ce912da5d",
".git/objects/67/f32d757d26caeb8b0f793f09b2444c48ae9509": "057de963beaefc4818bbe2e264fcc825",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/8e4eeddc9915e0d8ef6e83d6bde0340a61d886": "2a0901a4747c5b5d6607a0116b44b94c",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/6e/ee751511e80980d43cb2504ca2c9cf664f35e5": "4ba4843274bb85a9fdb92acf67518440",
".git/objects/72/0f1aa25a9e2e82f2e3c43549917a0a1e074091": "1a549bbc889bf87528b0a734bedf541c",
".git/objects/73/4b424eab682091dbefc600fd53d5fdf91ea4cf": "e89785fbe8d7d246f6869888ef9f2290",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/7c/44a9bf9591188fc5903981e6dd7ea66d0b35f0": "c6e6a0153e2d38b4e47959ad27222f29",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7d/2b2fd4011b4ab61feb9f2173e0eafa5e8ae376": "a3dcab3df20dc8fc77292f8effec78a0",
".git/objects/7d/da57112dccb860d9e2a98dcd1190909222e771": "b9c8cfecbc41c87d3f0081c834212c02",
".git/objects/7f/ad0a90013a43cbffbdeaf1923ba77de433c155": "ceb898bbd9fb312f1f86019ba48a8715",
".git/objects/80/0fa2e4aa712e1b52fcc36328305a9565b17b50": "b9d446179f0aaebbeed17f4f37901d2f",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/85/bf9ac3e4a5244af54611a0ecaf1943363b6657": "a2e389bf344d7dae66cc2199203d4222",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/93/04828a4391ac04d13235d55dc8708eb716b7f0": "9d212019e12192deccea36ceab0ed20a",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/bba1f479634b756515126fa945e9a1b3671d31": "6544e311a359a89811924c3c9f284154",
".git/objects/96/97a390894c7cfd7badbb1dffea3890ef4f4e58": "0a801ef70ca33bc89290433791971407",
".git/objects/9b/0a55bd61dfe1e50d0370695e38c11e139ad1c2": "57b1314e9a1ea37a53cb521a4b8bfe7d",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/9f/ff18d422dc8a995e90277fa13dd6a415f51801": "b0c69dc89282bf1b6a27b9089a0c18fc",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b3/4127c9f9baea014f39157c3cd5cbe16f626ac4": "f6112b32d215ea5b7b13f0204fba0cce",
".git/objects/b3/6198eed6b2c547e6546d9fe865573ae7cc5ff1": "1d92f3e588b79827bd995d52dc8fcce1",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b5/8c274435f234d50b95e5bf4eb4d9e18dc1531e": "91f3d3b5c4dbc3cb205badaa58858b0d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/50820a7815f11c095180b90117503cbc744a78": "8fb6947210bb389603b6b8c66b91333c",
".git/objects/ba/6af53b8158883fa349f86ad83158c4396b3823": "23af1a9bf48ba6d4aa38a8bbe99caec1",
".git/objects/bb/e045439a640cb051b4137ff8ac48604694a697": "c884897ebb4351cae1d580d8b2930d8b",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c6/6bf41330390c8df7aae6628369cafed7e09a03": "200bddab4c623afbc580346d648abdf6",
".git/objects/c8/5bc68fa7b58d541a60f3e96e281a04fecb9d35": "27a127a1e4eba650f7e61ea50458d4fe",
".git/objects/ce/62afceef6408bcfbfca12c696922fa6332a0d9": "95f5500a3c45f88bbe7133b854a52276",
".git/objects/cf/226ffa646398d3aacae2d80876e12a4782f2f1": "6f32f9816e77e2f258d0fa54c4efea01",
".git/objects/d0/e8f731c5243a5834ceaf4bb2b2dd5ae3f805d1": "43d3db6bd98251b2850ec92d5f937cdd",
".git/objects/d5/5596e55b0b9287145dffdfd448ca2d2397e6ce": "2253869ac9d272746e96cad9add163e0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/e0/5512b426aec11ea606b4fba9486a656474b2bf": "c2cf29a61e7072647f16ddeeba8b51df",
".git/objects/e1/2a49f28fc94b23f31ba93d7ab7ca88cd42b9d1": "7f2603b879647039c6f1b1e684daa06e",
".git/objects/e5/b5191e054c5f2e12f4152ca5081f5c21eab613": "777c0df29d429c52829a1c6fd546892d",
".git/objects/e7/df4f44889826b9135f345d380dacdbff953081": "27e7e0ce0aec9cff89954d93c480abf6",
".git/objects/ea/6bb9e801d53bfa8040a71a118ff0988f609942": "6aab5e33756359a7649b6fdbd3b9d651",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d91f5cbe2758e11cbb993402909f3122fcad4f": "6ac6008dc704a2cd55b3c5e2fdf8fd2c",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f3/015203a58006918f3190796403ef37a7867167": "736335bc6ce8d0a878e3996838a3bd86",
".git/objects/f3/f9606346e0786617265a01bf802df2ab248510": "7fed7c437200bb7385e07a88b63941a5",
".git/objects/f4/273a826614180e8b3b6d925b77f10fbeaaf531": "c2aa925c64f17eb9e774c440f3ca97e9",
".git/objects/f9/6fdecb45aa0e05dc203d1b775bdbad94788480": "5edd850e7b80c6a7012edda7c270375e",
".git/objects/f9/7a9fdbc50b4ba1b63d136bb3a0a6cfa56cbad0": "1a6feb4358f0d85dfe436ba1e1f0417e",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/f2b64e13fc58438eac4585a96f5914bfbf1912": "eb36180483ce5897ef5fe9f2fa011b53",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "7305a32b3973d332093d0b01aadd723a",
".git/refs/remotes/origin/master": "7305a32b3973d332093d0b01aadd723a",
"assets/AssetManifest.json": "c5cf50cb5aa7c446c522e42b08d3c6a4",
"assets/assets/admin/accept.png": "403a3d7c942afd509bffcb112b38b2e4",
"assets/assets/admin/add_image.png": "75b091ba9b22d4b40dfd0a0e6ab1f936",
"assets/assets/admin/admin_cover.png": "f4510119547de17e16915ebf1028078b",
"assets/assets/admin/admin_forget_password.png": "7340d7ca64f74b3b7335831b9ed88ba0",
"assets/assets/admin/calendar.png": "8461ccb9a7c19150183fe3cc59958960",
"assets/assets/admin/close.png": "2fd780872ac0fc0f900ca81717605d3f",
"assets/assets/admin/column-chart.svg": "95636d86d208ec3aa9b967bbacf7a9ed",
"assets/assets/admin/customer.svg": "8405111dd7f31a061574a1c2c16a3da4",
"assets/assets/admin/dots.png": "d96db7263559d90487b4083ea44e85f1",
"assets/assets/admin/enter.svg": "c889040d4a3f93de8b08598754079b46",
"assets/assets/admin/half-circle.svg": "9998af7d8476f150db38c02b7280b1ea",
"assets/assets/admin/logo.png": "2304875aed87e487b05e28c8aada64b0",
"assets/assets/admin/nuclear.svg": "0a575d202e7bf7dee63a1e752b2492be",
"assets/assets/admin/order.svg": "8c9f54731150bd32257937f7eaaf8166",
"assets/assets/admin/order_status.png": "73a938531b56444f76e2e4c4d2c7d7d7",
"assets/assets/admin/row_users.svg": "9ad20db038fb6afeff0467d7f912e673",
"assets/assets/admin/setting.svg": "7629e4fd4c80ccc9c10fc406161e19c6",
"assets/assets/admin/shopping-bag.svg": "01e72024185771203c2c5c4216a41672",
"assets/assets/admin/shopping-cart.svg": "9fc8fd256b7c6eb53249dfa86ca9c851",
"assets/assets/admin/stack_user.png": "0c445649e7194b4fcb2981d72f63f625",
"assets/assets/admin/star.svg": "57065b7ce8ef25aaf6bcff6e636add33",
"assets/assets/admin/total_sales.svg": "8ac9a4ec41b09f3bea26f8c08deb443e",
"assets/assets/admin/turn-left.svg": "045c95aea1a2f5e72ca6feb57ed9ef03",
"assets/assets/admin/user.png": "e876fe410159bf929e57489d43b41250",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a5867eeb0a2875cc3fdccd1fd760ba12",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "3b7e959b4b1a477b3bd679e6d0c86284",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "11f5c1d48686ef2a594dcc69b96aa97c",
"icons/Icon-512.png": "3c661c3f1606fae82405678e80b1b581",
"icons/Icon-maskable-192.png": "11f5c1d48686ef2a594dcc69b96aa97c",
"icons/Icon-maskable-512.png": "3c661c3f1606fae82405678e80b1b581",
"index.html": "785d384f70c81e09023615f087b28d22",
"/": "785d384f70c81e09023615f087b28d22",
"main.dart.js": "d6ba0f944f781e4c2747b058e5f0ae99",
"manifest.json": "063938ca79a876cad8fa466245b3c54c",
"version.json": "d8008e2eddb5f6e687c8fa99335a883b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
