const data = [
  {
    'planet_id': 0,
    'name': 'Меркурій',
    'img': 'http://kvant.space/sites/default/files/styles/news_photo/public/193-ab01321cc609aaa711ce48c248dfd04d.jpg?itok=EUDNxKLX',
    'type': 'Планета',
    'tags': ['Меркурій', 'Меркурі', 'Мерк'],
    'group': 'Земна група',
    'radius': '2440 км',
    'weigth': '3,3011×10^23 кг',
    'age': '4,503E9 років',
    'distance': '57910000 км',
    'more_info': 'https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%BA%D1%83%D1%80%D0%B8%D0%B9',
    'description': 'Мерку́рій — найближча до Сонця планета Сонячної системи. Обертається навколо Сонця за 87,969 земних діб. Меркурій належить до внутрішніх планет, оскільки його орбіта лежить ближче до Сонця, ніж пояс астероїдів. Після позбавлення Плутона статусу планети Меркурій є найменшою планетою Сонячної системи. Планету названо на честь римського бога Меркурія, послідовника грецького Гермеса та вавилонського Набу. Давні греки часів Гесіода назвали Меркурій «Στίλβων» (Стилбон, блискучий). До V століття до н. е. греки вважали, що Меркурій, видимий на вечірньому та вранішньому небі — це два різні об\'єкти. У Стародавній Індії Меркурій називали Будга (बुध) та Рогінея. У китайській, японській, в\'єтнамській та корейських мовах Меркурій називають Водяною зіркою (кит. і яп. 水星) на честь однієї з 5 стихій. '
  },

  {
    'planet_id': 1,
    'name': 'Венера',
    'img': 'https://i.ytimg.com/vi/lIdU9VDhzjI/hqdefault.jpg',
    'type': 'Планета',
    'tags': [ 'Венера', 'Внера', 'Вен', 'вен', 'венера', 'внера' ],
    'group': 'Земна група',
    'radius': '6 052 км',
    'weigth': '4,867E24 кг',
    'age': '4,503E9 років',
    'distance': '108200000 км',
    'more_info': 'https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%BD%D0%B5%D1%80%D0%B0_(%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0)',
    'description': 'Вене́ра — друга планета Сонячної системи. Період обертання навколо Сонця — 224,7 земних діб. Названа на честь Венери, богині кохання з римського пантеону. Це єдина з восьми основних планет Сонячної системи, яка отримала назву на честь жіночого божества. За розміром майже така сама, як Земля. Венера — внутрішня планета, і на земному небосхилі не віддаляється від Сонця далі 48°. Венера — третій за яскравістю об\'єкт на небі; її блиск поступається лише блиску Сонця та Місяця. Належить до планет, відомих людству з найдавніших часів. В українській міфології мала назву Красопані.['
  },

  {
    'planet_id': 2,
    'name': 'Земля',
    'type': 'Планета',
    'tags': ['Зем', 'Земля', 'земля'],
    'group': 'Земна група',
    'radius': '6371 км',
    'weigth': '5,972E24 кг',
    'age': '4,543E9 років',
    'distance': '149600000 км',
    'more_info': 'https://uk.wikipedia.org/wiki/%D0%97%D0%B5%D0%BC%D0%BB%D1%8F',
    'description': 'Земля́ — третя від Сонця планета Сонячної системи, єдина планета, на якій відоме життя, домівка людства. Земля належить до планет земної групи і є найбільшою з цих планет у Сонячній системі. Землю іноді називають світом, латинською назвою Терра або грецькою — Гея. Земля є об\'єктом дослідження значної кількості наук про Землю. Вивчення Землі як небесного тіла належить до царини астрономії, будову і склад Землі вивчає геологія, стан атмосфери — метеорологія, сукупність проявів життя на планеті — біологія. Географія дає опис особливостей рельєфу поверхні планети — океанів, морів, озер та річок, материків та островів, гір та долин, а також людські поселення й суспільні утворення: міста й села, держави, економічні райони тощо.'
  },

  {
    'planet_id': 3,
    'name': 'Місяць',
    'img': 'data:image/jpeg;base64,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',
    'type': 'Планета-супутник',
    'tags': ['Земля', 'Луна', 'Міс', 'Місяць'],
    'group': 'Земна група',
    'radius': '1737 км',
    'weigth': '7,3477×10^22 кг',
    'age': '4,53E9 років',
    'distance': '150000000 км',
    'more_info': 'https://uk.wikipedia.org/wiki/%D0%9C%D1%96%D1%81%D1%8F%D1%86%D1%8C_(%D1%81%D1%83%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA)',
    'description': 'Мі́сяць — єдиний природний супутник планети Земля. Другий за яскравістю об\'єкт на земному небосхилі після Сонця і п\'ятий за величиною супутник планет Сонячної системи. Станом на 2018 перший і єдиний позаземний об\'єкт природного походження, на якому побувала людина. Середня відстань між центрами Землі і Місяця — 384 400 км. Місяць привертав увагу людей з доісторичних часів. Це другий за яскравістю об\'єкт на небосхилі після Сонця. Оскільки Місяць обертається навколо Землі з періодом близько місяця, кут між Землею, Місяцем і Сонцем змінюється; ми спостерігаємо це явище як цикл місячних фаз. Період часу між послідовними новими місяцями становить 29,5 днів (709 годин). '
  }
]

export { data }
