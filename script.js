// 文章の配列
const sentences = [
  'この学校を志望した理由を教えてください。',
  '高専ではどんなことを頑張ってきましたか？',
  '高専で取り組んでいる研究について説明してください。',
  '大学に入ってからどんな研究をしたいと考えていますか？',
  '大学院の進学は考えていますか？',
  '将来どんな仕事をしたいですか？',
  'あなたの長所と短所を教えてください。',
  '学校以外で取り組んでいることはありますか？',
  '最近で気になっているニュースは何かありますか？',
  '自分が専攻している分野で有名な研究者を挙げて下さい。',
  '今日はどうやって大学まで来ましたか？',
  'この大学のアドミッションポリシーをご存知ですか？',
  'なぜこの学部・学科・コースを選んだのですか？',
  '興味のある研究室はありますか？',
  '大学編入学のためにどのように勉強をしましたか？',
  '併願校はありますか？合格したら入学しますか？'
];

let usedSentences = [];

let listener = function (event){
  // ランダムな文章を選択する
  let sentence = sentences[Math.floor(Math.random() * sentences.length)];

  // すでに表示されたことがある文章であれば、新しい文章を選択する
  while (usedSentences.includes(sentence)) {
    sentence = sentences[Math.floor(Math.random() * sentences.length)];
  }

  // 選択された文章を表示する
  document.getElementById('output').innerHTML = sentence;

  // 選択された文章をusedSentencesに追加する
  usedSentences.push(sentence);

  // 全ての文章が表示されたら、画面をタップしても何も起こらないようにする
    if (usedSentences.length === sentences.length) {
	
      document.removeEventListener('click', listener,false);
    }
}
// 画面がタップされたときの処理
document.addEventListener('click', listener,false);
