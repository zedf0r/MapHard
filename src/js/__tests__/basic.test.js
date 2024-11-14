import { Settings } from "../app";

test('Get error', () => {
  const Setting = new Settings();
  const expectObject = [
    ['theme', 'light'],
    ['music', 'pop'],
    ['difficulty', 'hard']
  ]
  Setting.settingSet(["theme", "music", "difficulty"], ["light", "pop", "hard"])
  expect(Setting.settingGet()).toEqual(expectObject)
})

test ('Try set nonkey', () => {
  const Setting = new Settings();
  const expectObject = [
    ['theme', ['dark', 'light', 'gray']],
    ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
    ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]
  ]
  Setting.settingSet(["nonexist"], ["light"])
  expect(Setting.settingGet()).toEqual(expectObject)
})